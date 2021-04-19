import { openDatabase, Database, SQLTransaction, Query, SQLResultSet, SQLError } from 'expo-sqlite';
import FavoriteMovie from './../models/favoriteMovie';
 
const databaseName: string = 'favoriteMovies';
 
const getDb = (name: string = databaseName): Database => {
    // Opent de db als deze bestaat, maakt db aan als deze nog niet bestaat.
    // DB INIT -> zou vanzelf moeten lukken.
    return openDatabase(name);
}
 
const transaction = (db: Database): Promise<SQLTransaction> => {
    return new Promise(function(resolve, reject) {
        db.transaction(
            (tx: SQLTransaction) => {
                resolve(tx);
            },
            (error) => {
                reject(error);
            },
            () => {
                console.info('Transaction succeeded 🥳.');
            },
        );
    });
}
 
const query = (tx: SQLTransaction, query: Query): Promise<SQLResultSet> => {
    return new Promise(function(resolve, reject) {
        tx.executeSql(
            query.sql,
            query.args,
            (tx: SQLTransaction, res: SQLResultSet) => {
                resolve(res);
            },
            (tx: SQLTransaction, error: SQLError) => {
                reject(error);
                return true;
            }
        )
    });
}
 
// ALLES PREPARED!
// TABLE INIT
export const initMovies = async () => {
    const db = getDb();
    const tx = await transaction(db).catch(error => console.error(error));
 
    if (tx) {
        await query(tx, {
            sql: "CREATE TABLE IF NOT EXISTS `favMovies` (id integer primary key autoincrement, idMovie int, picture text)",
            args: [],
        });
    }
}
 
export const moviesdb = {
    // C reate
    create: (m: FavoriteMovie): Promise<SQLResultSet> => {
        return new Promise(async function(resolve, reject) {
            initMovies();
            const db = getDb(),
                tx = await transaction(db);
    
            const res = await query(tx, {
                sql: "INSERT INTO `favMovies` (id, idMovie, picture) values(?, ?, ?)",
                args: [null, m.idMovie, m.picture],
            }).catch((error) => {
                reject(error);
            });
 
            if (res) resolve(res);
        });
    },
 
    // R ead
    read: (): Promise<SQLResultSet> => {
        return new Promise(async function(resolve, reject) {
            initMovies();
            const db = getDb(),
                tx = await transaction(db);
    
            const res = await query(tx, {
                sql: "SELECT * FROM `favMovies`",
                args: [],
            }).catch((error) => {
                reject(error);
            });
 
            if (res) resolve(res);
        });
    },
 
    // D elete
    delete: (id: number): Promise<SQLResultSet> => {
        return new Promise(async function(resolve, reject) {
            initMovies();
            const db = getDb(),
                tx = await transaction(db);
    
            const res = await query(tx, {
                sql: "DELETE FROM `favMovies` WHERE idMovie = ?",
                args: [id],
            }).catch((error) => {
                reject(error);
            });
 
            if (res) resolve(res);
        });
    },
}