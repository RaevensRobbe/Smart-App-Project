import React, { useState } from 'react';
import {Text, TouchableOpacity, View, TextInput} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import {SafeAreaView} from 'react-native-safe-area-context'

//Styles
import { background, text } from './../../styles/colors/theme';
import { tussentitel } from './../../styles/components/moreMovies';
import { button } from './../../styles/components/button';
import { search } from '../../styles/components/search';

const Search = ({navigation} : any) => {
    const [movieInput, setMovieInput] = useState('');
    
    return(
        <SafeAreaView style={[background.neutral[700], tussentitel.container]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{padding:16, marginVertical: 16, marginHorizontal:8}}>
            <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                <View style={[button.buttonSvg, background.neutral[500]]}>
                    <Svg style={[button.svg]} xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 20 22" fill="none" stroke="#e0d8d6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><Path d="M9 18l6-6-6-6"/></Svg> 
                </View>
                <Text style={[button.tekst ,text.neutral[100]]}>Search</Text>
            </View>
        </TouchableOpacity>
        <View style={[search.inputContainer]}>
            <TextInput
            style={[search.inputText ,text.neutral[100]]}
            placeholder="Search a movie"
            placeholderTextColor="#716D76"
            onChangeText={movie => setMovieInput(movie)}
            defaultValue={movieInput}
        />
        </View>

        </SafeAreaView>
    )
}

export default Search;