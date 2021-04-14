//@ts-nocheck
import React, { useState, useEffect } from 'react';
import {SafeAreaView, Text, TouchableOpacity, View, Image, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';

import Modal from 'react-native-modal';
import Svg, { Path } from 'react-native-svg';

//Styles
import { background, neutral, text } from '../styles/colors/theme';
import {Cards} from '../styles/components/cards';
import {PopUp} from '../styles/components/popup';
import { getMovieDetails } from '../utils/dataAccess';
import { MovieDetails } from '../Models/movieModel';
import { CustomButtonSeeMore } from './CustomButton';
import { button } from '../styles/components/button';

type MovieArgs = {
	idMovie: number;
	picture: string;
}

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const MovieCards = ({ idMovie, picture }: MovieArgs) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [movieData, setMovieData] = useState<string[]>();

    const [waitLoad, setWaitLoad] = useState(0);

    const [movieName, setMovieName] = useState<string>();
    const [movieDescription, setMovieDescription] = useState<string>();
    const [movieBackrop, setMovieBackrop] = useState<string>();
    const [movieVote, setMovieVote] = useState<number>();
    const [movieGenres, setMovieGenres] = useState<string[]>();

    const navigation = useNavigation();
  
    const getMovieData = async () => {
        const data = await getMovieDetails(idMovie);
        setMovieData(data);
        if (movieData == undefined) {
            
        } else {
        const genres = [];
        setMovieBackrop(IMAGE_URL + movieData[0]?.backdrop_path);
        setMovieName(movieData[0]?.title);
        setMovieDescription(movieData[0]?.overview);
        setMovieVote(movieData[0]?.vote_average);
        for (let i = 0; i < movieData[0]?.genres.length; i++) {
            genres.push(movieData[0]?.genres[i].name + "    ");
        }
        setMovieGenres(genres);
        //renderData();
        setModalVisible(true);
        }
    };

    // const renderData = () => {
    //     console.log("render");
    //     console.log(movieData);
    //     const genres = [];
    //     setMovieBackrop(IMAGE_URL + movieData[0]?.backdrop_path);
    //     setMovieName(movieData[0]?.title);
    //     setMovieDescription(movieData[0]?.overview);
    //     setMovieVote(movieData[0]?.vote_average);
    //     for (let i = 0; i < movieData[0]?.genres.length; i++) {
    //         genres.push(movieData[0]?.genres[i].name + "    ");
    //     }
    //     setMovieGenres(genres);
    //     console.log();

    //     setModalVisible(true);
    // };

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

    const full_url = IMAGE_URL + picture;

    return(
        <SafeAreaView>
            <TouchableOpacity key={idMovie} onPress={() => getMovieData()}>
            <Image 
                source={{uri: full_url}} 
                style={Cards.card} 
            />
            </TouchableOpacity>

            <BlurView intensity={150} isVisible={false}>
                <Modal isVisible={isModalVisible}>
                    <TouchableOpacity onPress={toggleModal} style={PopUp.container}>
                        <View style={PopUp.card}>
                            <Image source={{uri: movieBackrop}} style={PopUp.image}/>
                            {/* <View style={[PopUp.text_container]}> */}
                                <Text style={[PopUp.titel, text.neutral[100]]}>{movieName}</Text>
                                <Text style={[PopUp.genres, text.neutral[200]]}>{movieGenres}</Text>
                                <Text style={[PopUp.description, text.neutral[100]]}>{movieDescription}</Text>

                                <TouchableOpacity style={[PopUp.touchable]} onPress={() => {setModalVisible(!isModalVisible), navigation.navigate("MovieDetails", {movieId:idMovie})}}>
                                    <View  style={[ PopUp.button_container, background.neutral[500]]}>
                                        <Text style={[ button.buttonText, text.neutral[100]]}>See more</Text>
                                        <Svg xmlns="http://www.w3.org/2000/svg" width="50" height="29" viewBox="0 0 24 24" fill="none" stroke="#e0d8d6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><Path d="M9 18l6-6-6-6"/></Svg>  
                                    </View>                              
                                </TouchableOpacity>

                            {/* </View> */}
                        </View> 
                    </TouchableOpacity>
                </Modal>
            </BlurView> 
            
                
            
        </SafeAreaView>
    )
}

type CastArgs = {
	name: string;
	picture: string;
}

export const CastCards = ({ name, picture }: CastArgs) => {
    const full_cast_url = IMAGE_URL + picture;
    return (
        <SafeAreaView>
            <Image 
                source={{uri: full_cast_url}} 
                style={Cards.card} 
            />
            <Text style={[Cards.actorName, text.neutral[100]]}>{name}</Text>
        </SafeAreaView>

    )
}