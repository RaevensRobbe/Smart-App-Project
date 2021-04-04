//@ts-nocheck
import React, { useEffect, useState } from 'react';
import {Text, View, TouchableOpacity, ScrollView, Button} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context'

import { BlurView } from 'expo-blur';

import { useNavigation } from '@react-navigation/native';

import Svg, { Path } from 'react-native-svg';

//Components
import {MovieCards} from '../../components/MovieCards';

//Styles
import { background, text } from './../../styles/colors/theme';
import { tussentitel } from './../../styles/components/moreMovies';
import { button } from './../../styles/components/button';



import {getMorePopularMovies, getMoreTopRatedMovies, getMoreUpcomingMovies} from '../../utils/dataAccess';
import { Cards } from '../../styles/components/cards';

const MoreMovies = ({route, navigation: {goBack} } : any) => {

    const navigation = useNavigation();

    useEffect(() => {
        getMovies();
	}, []);

    const [waitLoad, setWaitLoad] = useState(0);

    const {name} = route.params;
    const str = JSON.stringify(name);
    const interTitleName = str.substring(1, str.length-1);

    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        if (interTitleName == "Popular Movies"){
            const popMovies = await getMorePopularMovies();
            setMovies(popMovies);
            setWaitLoad(1);
            console.log("popular movies opgehaald")
        } else if (interTitleName == "Upcoming Movies"){
            const futureMovies = await getMoreUpcomingMovies();
            setMovies(futureMovies);
            setWaitLoad(1);
            console.log("Future movies opgehaald")
        } else if (interTitleName == "Top Rated Movies"){
            const topMovies = await getMoreTopRatedMovies();
            setMovies(topMovies);
            setWaitLoad(1);
            console.log("top movies opgehaald")
        }
    }




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
        <SafeAreaView style={[background.neutral[700], tussentitel.container]}>

        <TouchableOpacity onPress={() => navigation.goBack()} style={{padding:16, margin :8}}>
            <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                <View style={[button.buttonSvg, background.neutral[500]]}>
                    <Svg style={[button.svg]} xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 20 22" fill="none" stroke="#e0d8d6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><Path d="M9 18l6-6-6-6"/></Svg> 
                </View>
                <Text style={[button.tekst ,text.neutral[100]]}>{interTitleName}</Text>
            </View>
        </TouchableOpacity>

            <ScrollView contentContainerStyle={[Cards.holder]}>
                { waitLoad == 1 && renderMovies(movies)}
            </ScrollView>
            
        </SafeAreaView>
    )
}


export default MoreMovies;