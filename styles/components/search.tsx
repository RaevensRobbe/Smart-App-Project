import { Dimensions, StyleSheet } from 'react-native';

export const search = StyleSheet.create({ 
    screenContainer:{
        flex: 1,
        margin: 0,

    },
    container:{
        flex: 1,
        flexDirection: 'column',
    },
    inputContainer:{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        marginHorizontal: 16,
        height:45,
        maxHeight: 45,
        borderColor: '#716D76',
        borderWidth: 1,
        borderRadius: 50,
    },
    inputText:{
        height: 40, 
        marginLeft:16,
        fontFamily: 'Montserrat',
        flexGrow: 1,
    },
    inputSvg:{
        marginLeft: 16,
        justifyContent: 'center',
    },
    TextContainer:{
        flex: 1,
        marginTop: 32,
        marginHorizontal: 16,
    },
    Headline:{
        fontSize: 20,
        fontFamily: 'Montserrat',
        textAlign: 'center',
    },
    subtext:{
        fontFamily: 'Montserrat',
        textAlign: 'center',
        marginTop: 16,
    },
    buttonSvg:{
        flexDirection: "row",
        width: 45,
        height: 45,
        borderRadius: 50,
        alignItems: "center"
    },
    containerTopIfData:{
        flex: 1, 
        flexDirection: "row", 
        marginHorizontal:8, 
        marginTop:16, 
        marginBottom:32,
        maxHeight: 45,
    },
});