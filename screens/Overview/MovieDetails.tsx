//@ts-nocheck
import React, { useEffect, useState } from 'react';
import {Text, View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';


const MovieDetails = ({navigation, route}) => {
    const [movieData, setMovieData] = useState<string[]>(route);
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
        const data = await getMovieDetails(idMovie);
        setMovieData(data);
        renderData();
    };

    useEffect(() => {
        // getMovieData();
	}, []);

    const renderData = () => {
        console.log("render data");
        
        const genres = [];
        const productionCompanies = [];

        setMovieBackrop(IMAGE_URL + movieData[0]?.backdrop_path);
        setMovieName(movieData[0]?.title);
        console.log(movieName);
        setMovieDescription(movieData[0]?.overview);
        setMovieVote(movieData[0]?.vote_average);
        setMovieTotalVotes(movieData[0]?.vote_count);
        for (let i = 0; i < movieData[0]?.genres.length; i++) {
            genres.push(movieData[0]?.genres[i].name + "    ");
        }
        setMovieGenres(genres);
        for (let i = 0; i < movieData[0]?.production_companies.length; i++) {
            productionCompanies.push(movieData[0]?.production_companies[i].name + ", ");
        }
        setMovieProductionCompanies(productionCompanies);
        console.log(productionCompanies);
        setMovieReleaseDate(movieData[0]?.release_data);
        setMovieTagline(movieData[0]?.tagline);
    };

    return(
        <SafeAreaView>
            <Text>Test MovieDetails</Text>
            {/* <Text>Moviename: {movieName}</Text>
            <Text>{movieReleaseDate}</Text> */}
        </SafeAreaView>
    )
}

export default MovieDetails;