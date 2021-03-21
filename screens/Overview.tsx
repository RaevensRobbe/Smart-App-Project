import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {Text, View, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native'

//Components
import AppHeader from '../components/AppHeader';
import TitleColumn from '../components/TitleColumn';

const Stack = createStackNavigator();

const Overview = ({navigation} : any) => {
    return(
        <SafeAreaView>
            <View> 
                <AppHeader/>
            </View>

            <ScrollView>

                <TitleColumn name='Popular Movies'/>

                <TitleColumn name='Get upcoming'/>

                <TitleColumn name='Top Rated Movies'/>

            </ScrollView>

        </SafeAreaView>

    )
}

export default Overview;