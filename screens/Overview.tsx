import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import {Text, View, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native'

//Styling

import { background, neutral, text } from '../styles/colors/theme';

//Components
import AppHeader from '../components/AppHeader';
import TitleColumn from '../components/TitleColumn';
import movieCards from '../components/movieCards';

import {getPopularMovies} from '../utils/dataAccess';

const Stack = createStackNavigator();

const Overview = ({navigation} : any) => {

    const [popularMovies, setPopularMovies] = useState([]);

    const getPopMovies = async () => {
        const tempData = await getPopularMovies();
        setPopularMovies(tempData);
    } 

    useEffect(() => {
		// setPopularMovies(getPopularMovies());
        getPopMovies();
	}, []);

    const renderPopularMovies = () => {
        const popMovies = [];
        console.log(popularMovies[1]);
        for (let i = 0; i < 10; i++){
            popMovies.push(
                
                // <Text style={[text.neutral[100]]}>{popularMovies[i]?.original_title}</Text>
                <movieCards key={popularMovies[i]?.id} picture={popularMovies[i]?.poster_path} />
            )
            
        }

        return popMovies;

    }

    return(
        <SafeAreaView>
            <View> 
                <AppHeader/>
            </View>

            <ScrollView>

                <TitleColumn name='Popular Movies'/>
                <ScrollView horizontal>
                     {renderPopularMovies()}
                </ScrollView>
                <TitleColumn name='Get upcoming'/>

                <TitleColumn name='Top Rated Movies'/>

            </ScrollView>

        </SafeAreaView>

    )
}

export default Overview;