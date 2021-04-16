//@ts-nocheck
import React, { useEffect, useState } from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MovieDetailsComponent from '../../components/MovieDetailsComponent';
import * as Calendar from 'expo-calendar';
import * as Notifications from 'expo-notifications';

import Svg, { Path, Rect, Line } from 'react-native-svg';

import {TitleColumn} from '../../components/TitleColumn';
import {CastCards, MovieCards} from '../../components/movieCards';


//Styles
import { background, text } from './../../styles/colors/theme';
import { detailPage } from './../../styles/components/detailPage';
import { tussentitel } from './../../styles/components/moreMovies';
import { button } from './../../styles/components/button';

import { getActors, getMovieDetails, getSimilarMovies } from './../../utils/dataAccess';
import { TouchableOpacity } from 'react-native-gesture-handler';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

const MovieDetails = ({navigation, route}) => {
    const { movieId } = route.params;

    const [movieData, setMovieData] = useState<string[]>();
    const [actors, setActors] = useState<string[]>();
    const [similarMovies, setSimilarMovies] = useState<string[]>();

    const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

    const getMovieData = async () => {
        const data = await getMovieDetails(movieId);
        setMovieData(data);
        const actors = await getActors(movieId);
        setActors(actors);
        const similar = await getSimilarMovies(movieId);
        setSimilarMovies(similar);
        
    };

    const renderActors = (props : string[]) => {
        const allActors = [];
        if (props != undefined) {
            for (let i = 0; i < props[0].cast.length; i++){
                const image = props[0].cast[i]?.profile_path;
                if (image == null) {
                    image = "null"; //Als de acteur geen foto geeft null meegeven zodat ik een no image found placeholder kan plaatsen
                }
                allActors.push(
                    <CastCards 
                        picture={image}
                        name={props[0].cast[i]?.name}
                    />
                )
            }
            if (props.length == 0 ){
                allActors.push(
                    <Text style={[text.neutral[100]]}>No similar movies found 😢</Text>
                )
            }
        }

        return allActors;
    }

    const renderMovies = (props : string[]) => {
        const simMovies = [];
        if (props != undefined) {
            for (let i = 0; i < props.length; i++){
                const image = props[0]?.poster_path;
                if (image == null) {
                    image = "null"; //Als de acteur geen foto geeft null meegeven zodat ik een no image found placeholder kan plaatsen
                }
                simMovies.push(
                    <MovieCards 
                        idMovie={props[i]?.id}
                        picture={props[i]?.poster_path}
                    />
                )
            }
            if (props.length == 0 ){
                simMovies.push(
                    <Text style={[text.neutral[100]]}>No similar movies found 😢</Text>
                )
            }
        }

        return simMovies;
    }

    const addToCalendar = async() => {
        const { status } = await Calendar.requestCalendarPermissionsAsync();
        if (status === 'granted') {
            const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
            // console.log(calendars);
            // console.log("add to calendar");
            //! default os calendar altijd id: 1 => en moet een string zijn
            const newEvent = await Calendar.createEventAsync("1", 
                {
                    title: movieData[0]?.title,
                    startDate: new Date(movieData[0]?.release_date),
                    endDate: new Date(movieData[0]?.release_date),
                    allDay : true,
                    timeZone: "Europe/Brussels",
                }
            );
            // console.log(newEvent);
            await Notifications.scheduleNotificationAsync({
                content: {
                  title: "Added successfully 🍿",
                  body: movieData[0]?.title + " has been added to your calendar",
                },
                trigger: { seconds: 1 },
              });
        }
    }

    const renderMovieInfo = (props : string[]) => {
        const movieInfo = [];

        if (props != undefined) {
            const genres = [];
            const productionCompanies = [];
            const languages = [];

            const year = movieData[0]?.release_date.substring(0,4);

            for (let i = 0; i < movieData[0]?.genres.length; i++) {
                genres.push(movieData[0]?.genres[i].name);
            }
            if(genres.length == 0){
                genres.push("unknown")
            } 
            // console.log(genres);

            for (let i = 0; i < movieData[0]?.production_companies.length; i++) {
                productionCompanies.push(movieData[0]?.production_companies[i].name);
            }
            if(productionCompanies.length == 0){
                productionCompanies.push("unknown")
            }

            for (let i = 0; i < movieData[0]?.spoken_languages.length; i++){
                languages.push(movieData[0]?.spoken_languages[i].english_name);
            }
            if(languages.length == 0){
                languages.push("unknown")
            }
            var full_url = IMAGE_URL + movieData[0]?.backdrop_path;
            // console.log(full_url);
            movieInfo.push(
                <View style={[detailPage.container]}>
                    <Image source={{uri: full_url}} style={[detailPage.image]}/>
                    <View style={[detailPage.ReleaseYear, background.neutral[500]]}>
                        <Text style={[detailPage.ReleaseYearText, text.neutral[100]]}>{year}</Text>
                    </View>
                    <View style={[detailPage.mainContainer]}>
                        <View style={[detailPage.titelContainer]}>
                            <Text style={[detailPage.titel, text.neutral[100]]}>{movieData[0]?.title}</Text>
                            <View>
                            <View style={[detailPage.genreContainer]}>
                                {genres.map((genre:string) =>
                                    <Text style={[detailPage.genreTekst, text.neutral[200]]}>{genre}</Text>
                                )}
                            </View>
                            </View>
                            <Text style={[detailPage.duration, text.neutral[200]]}>{movieData[0]?.runtime} min</Text>
                            
                        </View>
                        
                        <View style={[detailPage.actionContainer]}>
                            <View style={[detailPage.actionGroup]}>
                                <Text style={[detailPage.actionGroupTekst, text.neutral[200]]}>{movieData[0]?.vote_count} votes</Text>
                                <View style={[detailPage.voteCirkel, background.neutral[500]]}>
                                    <Text style={[detailPage.voteText, text.neutral[100]]}>{movieData[0]?.vote_average}</Text>
                                </View>
                            </View>

                            <View style={[detailPage.actionGroup]}>
                                <Text  style={[detailPage.actionGroupTekst, text.neutral[200]]}>Favorite</Text>
                                <TouchableOpacity onPress={() => console.log("clicked add to Favorites")}>
                                    <Svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#e0d8d6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><Path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></Path></Svg>
                                </TouchableOpacity>
                            </View>

                            <View style={[detailPage.actionGroup]}>
                                <Text  style={[detailPage.actionGroupTekst, text.neutral[200]]}>Save date</Text>
                                <TouchableOpacity onPress={() => addToCalendar()}>
                                <Svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#e0d8d6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><Rect x="3" y="4" width="18" height="18" rx="2" ry="2"></Rect><Line x1="16" y1="2" x2="16" y2="6"></Line><Line x1="8" y1="2" x2="8" y2="6"></Line><Line x1="3" y1="10" x2="21" y2="10"></Line></Svg>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={[detailPage.descriptionContainer]}>
                        <Text style={[detailPage.tagLine, text.neutral[100]]}>{movieData[0]?.tagline}</Text>
                        <Text style={[detailPage.description, text.neutral[100]]}>{movieData[0]?.overview}</Text>
                    </View>
                    
                    <View style={[background.neutral[800]]}>
                        <View style={[detailPage.infoContainer]}>

                            <View style={[detailPage.infoItems]}>
                                <Text style={[text.neutral[100]]}>Production: </Text>
                                <View style={[detailPage.infoItemsContainer]}>
                                    {productionCompanies.map((production:string) =>
                                        <Text style={[detailPage.productionCompany, text.neutral[200]]}>{production}</Text>
                                    )}
                                </View>
                            </View>

                            <View style={[detailPage.infoItems]}>
                                <Text style={[text.neutral[100]]}>Premiere: </Text>
                                <View style={[detailPage.premiereContainer]}>
                                    <Text style={[detailPage.productionCompany, text.neutral[200]]}>{movieData[0]?.release_date}</Text>
                                </View>         
                            </View>

                            <View style={[detailPage.infoItems]}>
                                <Text style={[text.neutral[100]]}>Languages: </Text>
                                <View style={[detailPage.infoItemsContainer]}>
                                    {languages.map((language:string) =>
                                        <Text style={[detailPage.productionCompany, text.neutral[200]]}>{language}</Text>
                                    )}
                                </View>
                            </View>
                            
                        </View>
                    </View>
                    
                </View>
            )
        }
        return movieInfo;
    }

    useEffect(() => {
        // console.log(movieId);
        getMovieData();
	}, []);

    return(
        <SafeAreaView style={[background.neutral[700], tussentitel.container]}>
            <ScrollView>
            
            {renderMovieInfo(movieData)}
 
            <TitleColumn name='Actors' />
                <ScrollView horizontal style={{paddingLeft:16,marginTop:16}}>
                    {renderActors(actors)}
                </ScrollView>
            
            <TitleColumn name='Similar Movies' />
                <ScrollView horizontal style={{paddingLeft:16,marginTop:16}}>
                    {renderMovies(similarMovies)}
                </ScrollView>
                <View style={{padding:8}}/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MovieDetails;