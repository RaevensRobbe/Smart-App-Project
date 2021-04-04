//@ts-nocheck
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import { BlurView } from 'expo-blur';

//Components
import AppHeader from '../../components/AppHeader';
import {TitleColumn} from '../../components/TitleColumn';
import {MovieCards} from '../../components/MovieCards';

//Styles
import { background } from './../../styles/colors/theme';

import {getPopularMovies, getTopRatedMovies, getUpcomingMovies} from '../../utils/dataAccess';

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

    return(
        
        <SafeAreaView style={[background.neutral[700]]}>  

            <ScrollView stickyHeaderIndices={[0]}>
                <View style={[background.neutral[700]]}>
                    <AppHeader/>
                </View>
                
                <TitleColumn name='Popular Movies' buttonId="popular" navigation="MoreMovies" api="popular" />
                <ScrollView horizontal style={{paddingLeft:16,marginTop:16}}>
                    {renderMovies(popularMovies)}
                </ScrollView>
                
                <TitleColumn name='Upcoming Movies' buttonId="upcoming" navigation="MoreMovies" api="upcoming"/>
                <ScrollView horizontal style={{paddingLeft:16,marginTop:16}}>
                    {renderMovies(upcomingMovies)}
                </ScrollView>
                
                <TitleColumn name='Top Rated Movies' buttonId="top_rated" navigation="MoreMovies" api="top_rated"/>
                <ScrollView horizontal style={{paddingLeft:16,marginTop:16}}>
                    {renderMovies(topRatedMovies)}
                </ScrollView>
                <View style={{padding:8}}/>                
            </ScrollView>

        </SafeAreaView>

    )
}

export default Overview;