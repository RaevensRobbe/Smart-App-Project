import React from 'react';
import {Text, View} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Search from './Search'

const Stack = createStackNavigator();

const SearchIndex = ({navigation} : any) => {
    return(
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Search" component={Search}/>
        </Stack.Navigator>
    )
}

export default SearchIndex;