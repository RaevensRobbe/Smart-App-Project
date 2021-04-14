//@ts-nocheck
import React, { useEffect, useState } from 'react';
import {Text, View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MovieDetailsComponent from '../../components/MovieDetailsComponent';

import {TitleColumn} from '../../components/TitleColumn';
import {CastCards, MovieCards} from '../../components/movieCards';

//Styles
import { background, text } from './../../styles/colors/theme';
import { tussentitel } from './../../styles/components/moreMovies';
import { button } from './../../styles/components/button';

import { getActors, getMovieDetails, getSimilarMovies } from './../../utils/dataAccess';


const MovieDetails = ({navigation, route}) => {
    const { movieId } = route.params;

    const [movieData, setMovieData] = useState<string[]>();
    const [actors, setActors] = useState<string[]>();
    const [similarMovies, setSimilarMovies] = useState<string[]>();
    //console.log(movieData[0]?.title);
    //console.log(movieData[0]?.title);

    const [movieName, setMovieName] = useState<string>();
    const [movieDescription, setMovieDescription] = useState<string>();
    const [movieBackrop, setMovieBackrop] = useState<string>();
    const [movieVote, setMovieVote] = useState<number>();
    const [movieTotalVotes, setMovieTotalVotes] = useState<number>();
    const [movieGenres, setMovieGenres] = useState<string[]>();
    const [movieProductionCompanies, setMovieProductionCompanies] = useState<string[]>();
    const [movieReleaseDate, setMovieReleaseDate] = useState<string>();
    const [movieTagline, setMovieTagline] = useState<string>();
    const [movieLanguage, setMovieLanguage] = useState<string[]>();

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
        if (props == undefined) {
            
        } else {
            // console.log("########################################### props");
            // console.log(props);
            // console.log("########################################### selected prop");
            // console.log(props[0].cast[0]);
            for (let i = 0; i < 10; i++){
                allActors.push(
                    <CastCards 
                        picture={props[0].cast[i]?.profile_path}
                        name={props[0].cast[i]?.name}
                    />
                )
            }
        }

        return allActors;
    }

    const renderMovies = (props : string[]) => {
        //console.log(props);
        const simMovies = [];
        if (props == undefined) {
            
        } else { 
            console.log("########################################### props");
            console.log(props[0]);
            for (let i = 0; i < 10; i++){
                simMovies.push(
                    <MovieCards 
                        idMovie={props[i]?.id}
                        picture={props[i]?.poster_path}
                    />
                )
            }
        }

        return simMovies;
    }

    useEffect(() => {
        getMovieData();
	}, []);

    const renderData = () => {
        // const genres = [];
        // const productionCompanies = [];

        // setMovieBackrop(IMAGE_URL + movieData[0]?.backdrop_path);
        // setMovieName(movieData[0]?.title);
        // console.log(movieName);
        // setMovieDescription(movieData[0]?.overview);
        // setMovieVote(movieData[0]?.vote_average);
        // setMovieTotalVotes(movieData[0]?.vote_count);
        // for (let i = 0; i < movieData[0]?.genres.length; i++) {
        //     genres.push(movieData[0]?.genres[i].name + "    ");
        // }
        // setMovieGenres(genres);
        // for (let i = 0; i < movieData[0]?.production_companies.length; i++) {
        //     productionCompanies.push(movieData[0]?.production_companies[i].name);
        // }
        // setMovieProductionCompanies(productionCompanies);
        // console.log(productionCompanies);
        // setMovieReleaseDate(movieData[0]?.release_data);
        // setMovieTagline(movieData[0]?.tagline);

        // const movies = [];
        // movies.push(<MovieDetailsComponent />);
        // return movies;
    };

    return(
        <SafeAreaView style={[background.neutral[700], tussentitel.container]}>
            <ScrollView>
            <TitleColumn name='Actors' />
                <ScrollView horizontal style={{paddingLeft:16,marginTop:16}}>
                    {renderActors(actors)}
                </ScrollView>
            
            <TitleColumn name='Similar Movies' />
                <ScrollView horizontal style={{paddingLeft:16,marginTop:16}}>
                    {renderMovies(similarMovies)}
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MovieDetails;