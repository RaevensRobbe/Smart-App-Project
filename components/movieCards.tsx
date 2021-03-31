import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View, Image} from 'react-native';



//Styles
import { background, neutral, text } from '../styles/colors/theme';
import {Cards} from '../styles/components/cards';

type EmojiArgs = {
	idMovie: number;
	picture: string;
}

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const MovieCards = ({ idMovie, picture }: EmojiArgs) => {
    const pressedMovie = (i) => {
        console.log("pressed: " + i);
    }
    const full_url = IMAGE_URL + picture;
    // console.log(full_url);
    return(
        <SafeAreaView>
            <TouchableOpacity key={idMovie} onPress={() => pressedMovie(idMovie)}>
            <Image 
                source={{uri: full_url}} 
                style={Cards.card} 
            />
            </TouchableOpacity>
        </SafeAreaView>
    )
}