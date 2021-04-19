import { StyleSheet } from 'react-native';

export const button = StyleSheet.create({
    button:{
        flex: 1,
        flexDirection: "row",
        height:30,
        width: 125,
        borderRadius: 20,
    },
    buttonText:{
        textAlignVertical: 'center',
        marginLeft: 16,
        fontSize:12,
        height: 27,
        fontFamily: 'Montserrat',
    },
    buttonSvg:{
        flexDirection: "row",
        width: 40,
        height: 40,
        borderRadius: 50,
        flexShrink: 1,
    },
    svg:{
        transform: [{ rotate: '180deg'}],
    },
    tekst:{
        fontFamily: 'Montserrat',
        paddingLeft: 16,
        fontSize: 20,  
    },
    circleButton:{
        marginTop:16,
        width: 45,
        height: 45,
        borderRadius: 50,
    },
});