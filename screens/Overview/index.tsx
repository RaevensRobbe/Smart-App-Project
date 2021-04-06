import React from 'react';
import {Text, View} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Overview from './Overview'
import MoreMovies from './MoreMovies';
import MovieDetails from './MovieDetails';

const Stack = createStackNavigator();

const OverviewIndex = ({navigation} : any) => {
    return(
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Overview" component={Overview}/>
            <Stack.Screen name="MoreMovies" component={MoreMovies}/>
            <Stack.Screen name="MovieDetails" component={MovieDetails}/>
        </Stack.Navigator>
    )
}

export default OverviewIndex;