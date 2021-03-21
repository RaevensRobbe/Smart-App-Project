import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View, Image} from 'react-native';

//Styles
import { background, neutral, text } from '../styles/colors/theme';
import {Cards} from '../styles/components/cards';

type EmojiArgs = {
	key: any;
	picture: string;
}

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const MovieCards = ({ key, picture }: EmojiArgs) => {
    console.log(key + " " + picture);
    const full_url = IMAGE_URL + picture;
    console.log(full_url);
    return(
        <SafeAreaView>
            <TouchableOpacity>
            <Image 
                source={{uri: full_url}} 
                style={Cards.card} 
            />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default MovieCards;