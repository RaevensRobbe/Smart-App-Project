import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View, Image} from 'react-native';

import { background, neutral, text } from '../styles/colors/theme';

type EmojiArgs = {
	key: string;
	picture: string;
}

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const movieCards = ({ key, picture }: EmojiArgs) => {
    return(
        <SafeAreaView>
            <View>
            <Image source={{uri: IMAGE_URL + picture}} />
            </View>
        </SafeAreaView>
    )
}

export default movieCards;