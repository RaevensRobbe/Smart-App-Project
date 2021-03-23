import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import {Text, View, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native'

//Styling

import { background, neutral, text } from '../styles/colors/theme';

//Components
import AppHeader from '../components/AppHeader';
import TitleColumn from '../components/TitleColumn';
import MovieCards from '../components/MovieCards';

import {getPopularMovies, getTopRatedMovies, getUpcomingMovies} from '../utils/dataAccess';

const Stack = createStackNavigator();

const Overview = ({navigation} : any) => {

    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    const getMovies = async () => {
        const popMovies = await getPopularMovies();
        setPopularMovies(popMovies);
        const topMovies = await getTopRatedMovies();
        setTopRatedMovies(topMovies);
        const futureMovies = await getUpcomingMovies();
        setUpcomingMovies(futureMovies);
    } 

    useEffect(() => {
        getMovies();
	}, []);

    const renderMovies = (props : string[]) => {
        const popMovies = [];

        for (let i = 0; i < 10; i++){
            popMovies.push(
                <MovieCards 
                    idMovie={props[i]?.id} //id => wanneer geklikt op film dat je weet welke film
                    picture={props[i]?.poster_path} // picture => afbeelding weergeven
                />
            )
        }
        return popMovies;
    }

    const renderTopMovies = () => {}

    return(
        <SafeAreaView>
            <ScrollView style={{paddingBottom:16}}>
            <View> 
                <AppHeader/>
            </View>

            

                <TitleColumn name='Popular Movies'/>
                <ScrollView horizontal style={{paddingLeft:16,marginTop:16}}>
                    {renderMovies(popularMovies)}
                </ScrollView>

                <TitleColumn name='Get upcoming'/>
                <ScrollView horizontal style={{paddingLeft:16,marginTop:16}}>
                     {renderMovies(upcomingMovies)}
                </ScrollView>

                <TitleColumn name='Top Rated Movies'/>
                <ScrollView horizontal style={{paddingLeft:16,marginTop:16}}>
                     {renderMovies(topRatedMovies)}
                </ScrollView>
            </ScrollView>

        </SafeAreaView>

    )
}

export default Overview;