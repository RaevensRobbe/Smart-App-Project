import { Dimensions, StyleSheet } from 'react-native';

export const actorDetails = StyleSheet.create({
    image:{
        height: (Dimensions.get('screen').width - 3 * 16) / 1.25,
        width: (Dimensions.get('window').width - 3 * 16) / 2,
        borderRadius: 10, 
        marginRight: 16,
    },
    infoContainer:{
        marginHorizontal:16,
        marginTop: 16,
        flex: 1,
        flexDirection: 'row',
    },
    info:{
        flex: 1,
        flexDirection: 'column',
    },
    name:{
        fontFamily: 'MontserratBold',
        fontSize:20,
        marginBottom:16,
    },
    regularText:{
        fontFamily: 'Montserrat',
        fontSize:12,
        marginBottom: 8
    },
    descriptionContainer:{
        marginVertical: 16,
        flex: 1,
    },
    description:{
        fontFamily: 'Montserrat',
        fontSize:12,
        marginVertical: 16,
        marginHorizontal: 16,
    },
})