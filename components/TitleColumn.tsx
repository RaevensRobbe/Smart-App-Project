import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import { background, neutral, text } from '../styles/colors/theme';

import { Intertitles } from '../styles/components/Intertitles';

import {CustomButtonSeeMore} from './CustomButton';

export const TitleColumn = (props : any) => {
    return(
        <SafeAreaView>
            <View style={Intertitles.Container}>
                <View style={[Intertitles.Rectangle, background.neutral[500]]} />
                <Text style={[Intertitles.Title, text.neutral[100]]} >{props.name}</Text>
                <View style={[Intertitles.button]}>
                    <CustomButtonSeeMore buttonId={props.buttonId} navigation={props.navigation} name={props.name} />
                </View>
            </View>
        </SafeAreaView>
    )
}