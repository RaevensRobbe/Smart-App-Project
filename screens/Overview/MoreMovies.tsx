import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import {Text, View, TouchableOpacity, ScrollView, Button} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context'

import { BlurView } from 'expo-blur';
// @ts-ignore 
import Svg, { Path } from 'react-native-svg';


//Components
import AppHeader from '../../components/AppHeader';
import MovieCards from '../../components/MovieCards';
import {CustomButtonSvg} from '../../components/CustomButton';

//Styles
import { neutral, background, text } from './../../styles/colors/theme';
import { tussentitel } from './../../styles/components/moreMovies';
import { button } from './../../styles/components/button';

import {getPopularMovies, getTopRatedMovies, getUpcomingMovies} from '../../utils/dataAccess';

const MoreMovies = ({route, navigation: {goBack} } : any) => {
    const {name} = route.params;
    const str = JSON.stringify(name);
    const interTitleName = str.substring(1, str.length-1);
    console.log(interTitleName);

    return(
        <SafeAreaView style={[background.neutral[700], tussentitel.container,]}>
            <View style={{padding:16}}>
            <CustomButtonSvg tekst={interTitleName} />
            </View>
            <ScrollView >
                
            </ScrollView>
        </SafeAreaView>
    )
}


export default MoreMovies;