import React from 'react';
import {Text, View} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Overview from './Overview'
import MoreMovies from './MoreMovies';

const Stack = createStackNavigator();

const OverviewIndex = ({navigation} : any) => {
    return(
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Overview" component={Overview}/>
            <Stack.Screen name="MoreMovies" component={MoreMovies}/>
        </Stack.Navigator>
    )
}

export default OverviewIndex;