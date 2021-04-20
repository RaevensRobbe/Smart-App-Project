import React, { useCallback, useEffect, useState } from 'react';
import {Text, TouchableOpacity, View, TextInput, ScrollView} from 'react-native';
import Svg, { Line, Path, Circle } from 'react-native-svg';
import {SafeAreaView} from 'react-native-safe-area-context';
import { SQLResultSetRowList } from "expo-sqlite";
import { moviesdb } from './../../utils/db';
import { useFocusEffect } from "@react-navigation/core";

//Styles
import { background, text } from './../../styles/colors/theme';
import { tussentitel } from './../../styles/components/moreMovies';
import { button } from './../../styles/components/button';
import { favoriteStyle } from '../../styles/components/favorites';
import { Cards } from '../../styles/components/cards';
import FavoriteMovie from '../../models/favoriteMovie';
import { MovieCards } from '../../components/movieCards';


const Favorite = ({navigation} : any) => { 

    const [favMovies, setFavMovies] = useState<FavoriteMovie[]>([])

    const getFavorites = async () => {
        const { rows }: {rows: SQLResultSetRowList} = await moviesdb.read();
        console.log({ rows });
        setFavMovies((rows as any)._array);
    }

    const renderMovies = (props : string[]) => {
        const foundMovies = [];
        console.log("###################");
        console.log(props);
        
        for (let i = 0; i < props.length; i++){
            console.log(props[i].idMovie);
            foundMovies.push(
                <MovieCards 
                    idMovie={props[i].idMovie} //id => wanneer geklikt op film dat je weet welke film
                    picture={props[i].picture} // picture => afbeelding weergeven
                />
            )
        }

        return foundMovies;
    }

    useFocusEffect(
        useCallback(
          () => {
            getFavorites();
          }, []
        )
      );

    return (
        <SafeAreaView style={[background.neutral[700], favoriteStyle.screenContainer]}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{padding:16, marginVertical: 16, marginHorizontal:8}}>
                    <View style={{flex: 1, flexDirection: "row", alignItems: "center", marginBottom:16}}>
                        <View style={[button.buttonSvg, background.neutral[500]]}>
                            <Svg style={[button.svg]} xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 20 22" fill="none" stroke="#e0d8d6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><Path d="M9 18l6-6-6-6"/></Svg> 
                        </View>
                        <Text style={[button.tekst ,text.neutral[100]]}>Your favorites</Text>
                    </View>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={[Cards.holder]}>
                    { renderMovies(favMovies)}
                </ScrollView>
        </SafeAreaView>
    )
}

export default Favorite;