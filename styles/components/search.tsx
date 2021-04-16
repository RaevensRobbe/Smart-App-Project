import { Dimensions, StyleSheet } from 'react-native';

export const search = StyleSheet.create({ 
    inputContainer:{
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
        marginTop: 16,
        maxHeight: 45,
        borderColor: '#716D76',
        borderWidth: 1,
        borderRadius: 50,
    },
    inputText:{
        height: 40, 
        marginLeft:16,
        fontFamily: 'Montserrat'
    }
});