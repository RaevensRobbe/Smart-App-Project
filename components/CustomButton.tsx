import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// @ts-ignore 
import Svg, { Path } from 'react-native-svg';


import { background, neutral, text } from '../styles/colors/theme';
import { button } from '../styles/components/button';

const CustomButton = () => {
    return (
            <TouchableOpacity>

                <View style={[ button.button, background.neutral[500]]}>
                    <Text style={[ button.buttonText, text.neutral[100]]}>See more</Text>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="50" height="29" viewBox="0 0 24 24" fill="none" stroke="#e0d8d6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><Path d="M9 18l6-6-6-6"/></Svg>
                </View>

            </TouchableOpacity>
    )
}

export default CustomButton;