import React from 'react';
import {Text, View} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Favorite from './Favorites'

const Stack = createStackNavigator();

const FavoriteIndex = ({navigation} : any) => {
    return(
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Search" component={Favorite}/>
        </Stack.Navigator>
    )
}

export default FavoriteIndex;