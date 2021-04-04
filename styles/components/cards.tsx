import { Dimensions, StyleSheet } from 'react-native';

export const Cards = StyleSheet.create({
    holder:{
        marginHorizontal: 16,
        marginBottom:32,
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent: 'space-between',
        paddingBottom: 8,
    },
    card:{
        height: (Dimensions.get('screen').width - 3 * 16) / 2,
        width: (Dimensions.get('window').width - 3 * 16) / 3.3, 
        marginRight: 15, 
        borderRadius: 10,
        marginTop: 16,
        justifyContent: 'center',
        alignItems:'center',
    },
});