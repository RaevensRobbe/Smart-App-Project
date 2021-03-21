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
});