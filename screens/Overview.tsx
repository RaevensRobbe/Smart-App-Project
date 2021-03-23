import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import {Text, View, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native'

//Styling

import { background, neutral, text } from '../styles/colors/theme';

//Components
import AppHeader from '../components/AppHeader';
import TitleColumn from '../components/TitleColumn';
import MovieCards from '../components/MovieCards';

import {getPopularMovies, getTopRatedMovies} from '../utils/dataAccess';

const Stack = createStackNavigator();

const Overview = ({navigation} : any) => {

    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);

    const getPopMovies = async () => {
        const tempData = await getPopularMovies();
        setPopularMovies(tempData);
    }

    const getTopMovies = async () => {
        const tempData = await getTopRatedMovies();
        setTopRatedMovies(tempData);
    } 

    useEffect(() => {
		// setPopularMovies(getPopularMovies());
        getPopMovies();
        getTopMovies();
	}, []);

    const renderPopularMovies = () => {
        const popMovies = [];

        for (let i = 0; i < 10; i++){
            popMovies.push(
                <MovieCards 
                    idMovie={popularMovies[i]?.id} //id => wanneer geklikt op film dat je weet welke film
                    picture={popularMovies[i]?.poster_path} // picture => afbeelding weergeven
                />
            )
        }
        return popMovies;
    }

    const renderTopMovies = () => {}

    return(
        <SafeAreaView>
            <View> 
                <AppHeader/>
            </View>

            <ScrollView>

                <TitleColumn name='Popular Movies'/>
                <ScrollView horizontal style={{paddingLeft:16,marginTop:16}}>
                     {renderPopularMovies()}
                </ScrollView>
                <TitleColumn name='Get upcoming'/>

                <TitleColumn name='Top Rated Movies'/>

            </ScrollView>

        </SafeAreaView>

    )
}

export default Overview;