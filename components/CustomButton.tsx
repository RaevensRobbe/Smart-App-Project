//@ts-nocheck
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';


import { background, text } from '../styles/colors/theme';
import { button } from '../styles/components/button';

export const CustomButtonSeeMore = (props : any) => {
    const navigation = useNavigation();

    return (
            <TouchableOpacity onPress={() => { navigation.navigate(props.navigation, {name: props.name}) }}>
                <View style={[ button.button, background.neutral[500]]}>
                    <Text style={[ button.buttonText, text.neutral[100]]}>See more</Text>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="50" height="29" viewBox="0 0 24 24" fill="none" stroke="#e0d8d6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><Path d="M9 18l6-6-6-6"/></Svg>
                </View>

            </TouchableOpacity>
    )
}

export const CustomButtonSvg = (props: any) => {
    const navigation = useNavigation();
    const interTitleName = props.tekst;

    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                <View style={[button.buttonSvg, background.neutral[500]]}>
                    <Svg style={[button.svg]} xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 20 22" fill="none" stroke="#e0d8d6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><Path d="M9 18l6-6-6-6"/></Svg> 
                </View>
                <Text style={[button.tekst ,text.neutral[100]]}>{props.tekst}</Text>
            </View>
            
        </TouchableOpacity>
)
}