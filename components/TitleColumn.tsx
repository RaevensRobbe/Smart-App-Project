import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import { background, neutral, text } from '../styles/colors/theme';

import { Intertitles } from '../styles/components/Intertitles';

import CustomButton from './CustomButton';

const TitleColumn = (props : any) => {
    return(
        <SafeAreaView>
            <View style={Intertitles.Container}>
                <View style={[Intertitles.Rectangle, background.neutral[500]]} />
                <Text style={[Intertitles.Title, text.neutral[100]]} >{props.name}</Text>
                <View style={[Intertitles.button]}>
                    <CustomButton />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default TitleColumn;