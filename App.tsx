import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
// @ts-ignore
import Ionicons from '@expo/vector-icons/Ionicons';

import {useFonts} from 'expo-font';

// screens
import Favorites from './screens/Favorites';
import Overview from './screens/Overview/Overview';
import SearchIndex from './screens/Search/index';
import OverviewIndex from './screens/Overview';

//Styles
import { neutral, background } from './styles/colors/theme'


const Tab = createBottomTabNavigator();

export default function App() {

  const [loaded, error] = useFonts({
    MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
    Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
  });

  const  customTabOptions = ({ route }: any) => ({
    tabBarIcon: ({ focused, color, size }: any) => {
    let iconName;

    if (route.name === 'overview') {
        iconName = focused ? 'home' : 'home';
    } else if (route.name === 'search') {
        iconName = focused ? 'search' : 'search';
    } else if (route.name === 'favorites') {
        iconName = focused ? 'heart-outline' : 'heart-outline';
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
    },
})

if(loaded){
  return (
      <NavigationContainer>
          <StatusBar style='light'/>
        <Tab.Navigator 
          screenOptions={customTabOptions} 
          tabBarOptions={{
              activeTintColor: '#DF1233',
              inactiveTintColor: '#E0D8D6',
              tabStyle: {
                ...background.neutral[800],
              }, 
              style: {
                ...background.neutral[500],
              }
          }}
          sceneContainerStyle={
              [ background.neutral[700] ]
          }
        >
          <Tab.Screen name="overview" component={OverviewIndex} />
          <Tab.Screen name="search" component={SearchIndex} />
          <Tab.Screen name="favorites" component={Favorites} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  else {
    return <ActivityIndicator />
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
