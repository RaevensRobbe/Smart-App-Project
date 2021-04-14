import { Dimensions, StyleSheet } from 'react-native';

export const detailPage = StyleSheet.create({
    image:{
        height: (Dimensions.get('screen').width - 3 * 16) /1.5,
        width: (Dimensions.get('window').width) , 
    },
    container:{
        flex: 1,
        flexDirection: "column",
    },

    mainContainer:{
        marginHorizontal: 16,
        flex: 1,
        flexDirection: "row",
    },
    mainTekst:{
        fontSize:12,
        fontFamily: 'Montserrat',
    },
    genreTekst:{
        fontSize:12,
        fontFamily: 'Montserrat',
        marginRight: 5,
    },
    titelContainer:{
        flex:1,
        flexDirection: "column",
    },
    duration:{
        marginTop:8,
        fontSize:12,
        fontFamily: 'Montserrat',
    },
    titel:{
        fontFamily: 'MontserratBold',
        fontSize:20,
        marginBottom:8,
    },
    genreContainer:{
        flex:1,
        flexDirection: 'row',
        flexWrap:'wrap',
        marginTop:5,
    },

    actionContainer:{
        flex:1,
        flexDirection: "column",
        textAlign: "right",
    },
    actionGroup:{
        flex:1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom:16,
    },
    actionGroupTekst:{
        marginRight:16,
        fontSize:12,
        fontFamily: 'Montserrat',
    },
    voteCirkel:{
        borderRadius: 50,
        height: 30,
        maxWidth:30,
        flex:1,
        alignItems: "center",
        justifyContent: "center",
    },
    

    ReleaseYear:{
        flex: 1,
        flexDirection: "row",
        height:40,
        width: 80,
        borderRadius: 50,
        alignItems: "center",
        marginLeft: 16,
        marginTop: -20,
    },
    ReleaseYearText:{
        textAlign: "center",
        fontFamily: 'Montserrat',
        fontSize:16,
        width: 80,
    },

    descriptionContainer:{
        flex:1,
        marginHorizontal: 16,
    },

    description:{
        fontFamily: 'Montserrat',
        fontSize: 12,
        marginBottom: 16,
    },

    tagLine:{
        fontFamily: 'MontserratBold',
        marginBottom:8,
        fontSize: 14,
    },

    infoContainer:{
        flex:1,
        flexDirection: 'column',
        paddingHorizontal: 16,
    },
    infoItems:{
        flex:1,
        marginVertical: 16,
        flexDirection: 'row',
    },
    infoItemsContainer:{
        flex:1,
        flexDirection: 'row',
        flexWrap:'wrap',
        marginLeft: 16,
    },
    premiereContainer:{
        flex:1,
        flexDirection: 'row',
        flexWrap:'wrap',
        marginLeft: 28,
    },
    productionCompany:{
        fontSize:12,
        fontFamily: 'Montserrat',
    },
});