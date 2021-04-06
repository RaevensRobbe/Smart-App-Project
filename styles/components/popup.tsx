import { Dimensions, StyleSheet } from 'react-native';

export const PopUp = StyleSheet.create({
    container:{
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width/1.1,
        flex:1,
        justifyContent: 'center',
    },
    card:{
        height: (Dimensions.get('window').height - 3 * 16)/1.5,
        borderRadius: 25,
        backgroundColor: '#1C1C2B',
        display:"flex",
        flexDirection: 'column',
    },
    image:{
        width: Dimensions.get('window').width/1.1,
        height: (Dimensions.get('window').height - 3 * 16)/4,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    titel:{
        fontSize: 20,
        fontFamily: 'Montserrat',
    },
    genres:{
        fontSize:12,
        fontFamily: 'Montserrat',
        marginTop:10,
    },
    description:{
        fontSize:12,
        fontFamily: 'Montserrat',
        marginTop:10,
    },
    button_container:{
        alignSelf: 'flex-end',
        flexDirection: 'row',
        width: Dimensions.get('window').width/3.5,
        borderRadius: 20,
    },
});