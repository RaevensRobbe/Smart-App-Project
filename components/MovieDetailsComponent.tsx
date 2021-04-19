import React from 'react';
import {Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { background, neutral, text } from '../styles/colors/theme';

import { Header } from '../styles/components/header';



const MovieDetailsComponent = (props: any) => {
    return(
        <SafeAreaView> 
            <View style={Header.Container}>
                <Text style={[Header.Text, text.neutral[100]]}>
                    Movie
                </Text>
                <Text style={[Header.Text,text.neutral[500]]}>
                    geek
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default MovieDetailsComponent;