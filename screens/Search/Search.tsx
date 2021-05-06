import React, { useEffect, useState } from 'react';
import {Text, TouchableOpacity, View, TextInput} from 'react-native';
import Svg, { Line, Path, Circle } from 'react-native-svg';
import {SafeAreaView} from 'react-native-safe-area-context'

//Styles
import { background, text } from './../../styles/colors/theme';
import { tussentitel } from './../../styles/components/moreMovies';
import { button } from './../../styles/components/button';
import { search } from '../../styles/components/search';
import { getSearchMovies } from '../../utils/dataAccess';
import { TitleColumn } from '../../components/TitleColumn';
import { ScrollView } from 'react-native-gesture-handler';
import { MovieCards } from '../../components/movieCards';
import { Cards } from '../../styles/components/cards';
import { CustomCircleButton } from '../../components/CustomButton';

const Search = ({navigation} : any) => {
    const [movieInput, setMovieInput] = useState('');
    const [searchedMovie, setSearchedMovie] = useState([]);

    var keyCounter = 1;

    const getMovies = async () => {
        const movieData = await getSearchMovies(movieInput);
        setSearchedMovie([]);
        setSearchedMovie(movieData);
        
    } 

    const renderMovies = (props : string[]) => {
        const foundMovies = [];
        //console.log(props);
        if(searchedMovie){
            for (let i = 0; i < props.length; i++){
                foundMovies.push(
                    <MovieCards 
                        key={keyCounter}
                        idMovie={props[i].id} //id => wanneer geklikt op film dat je weet welke film
                        picture={props[i].poster_path} // picture => afbeelding weergeven
                    />
                )
                keyCounter++;
            }
        }

        return foundMovies;
    }

    useEffect(() => {
        console.log("useEffect");
    },[searchedMovie])

    const returnButton = () =>{
        setSearchedMovie([]);
        setMovieInput('');
        navigation.goBack();
    }

    return(
        //SafeAreaView moet hier staan en niet in conditionele rendering anders werkt de rendering niet
        <SafeAreaView style={[background.neutral[700], search.screenContainer]}>
        {
            searchedMovie.length > 0 ? 
            //Als er data is ####################################################
            <View style={[search.container]}> 
                <View style={[search.containerTopIfData]}>
                    <TouchableOpacity onPress={() => returnButton()} style={{paddingBottom:16, marginVertical: 16, marginHorizontal:8, marginTop:20}}>
                        <View style={{flex: 1, flexDirection: "row", alignItems: "center", marginBottom:16}}>
                            <View style={[button.buttonSvg, background.neutral[500]]}>
                                <Svg style={[button.svg]} xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 20 22" fill="none" stroke="#e0d8d6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><Path d="M9 18l6-6-6-6"/></Svg> 
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={[search.inputContainer]}>
                        <View style={[search.inputSvg]}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#716D76" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><Circle cx="11" cy="11" r="8"></Circle><Line x1="21" y1="21" x2="16.65" y2="16.65"></Line></Svg>
                        </View>
                        <TextInput
                        style={[search.inputText ,text.neutral[100]]}
                        placeholder="Search a movie"
                        placeholderTextColor="#716D76"
                        onChangeText={movie => setMovieInput(movie)}
                        onSubmitEditing={()=>{
                            getMovies();
                        }}
                        defaultValue={movieInput}
                    />
                    </View>
                </View>
                <TitleColumn name='Results' />
                <View style={{marginBottom:8}}/>
                <ScrollView contentContainerStyle={[Cards.holder]}>
                    { renderMovies(searchedMovie)}
                </ScrollView>
            </View>

             
            //Geen data #########################################################
            : 
            <View style={[tussentitel.container]}>       
                <TouchableOpacity onPress={() => navigation.goBack()} style={{padding:16, marginVertical: 16, marginHorizontal:8}}>
                    <View style={{flex: 1, flexDirection: "row", alignItems: "center", marginBottom:16}}>
                        <View style={[button.buttonSvg, background.neutral[500]]}>
                            <Svg style={[button.svg]} xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 20 22" fill="none" stroke="#e0d8d6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><Path d="M9 18l6-6-6-6"/></Svg> 
                        </View>
                        <Text style={[button.tekst ,text.neutral[100]]}>Search</Text>
                    </View>
                </TouchableOpacity>
                <View style={[search.inputContainer]}>
                    <View style={[search.inputSvg]}>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#716D76" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><Circle cx="11" cy="11" r="8"></Circle><Line x1="21" y1="21" x2="16.65" y2="16.65"></Line></Svg>
                    </View>
                    <TextInput
                    style={[search.inputText ,text.neutral[100]]}
                    placeholder="Search a movie"
                    placeholderTextColor="#716D76"
                    onChangeText={movie => setMovieInput(movie)}
                    onSubmitEditing={()=>{
                        getMovies();
                    }}  
                    defaultValue={movieInput}
                />
                </View>
                <View style={[search.TextContainer]}>
                    <Text style={[search.Headline, text.neutral[100]]}>What are you searching for?</Text>
                    <Text style={[search.subtext, text.neutral[200]]}>Search a movie you'd like to have some information about or search a movie you'd like to add to your favorites.</Text>
                </View>
            </View>
        }

        </SafeAreaView>
    )
}

export default Search;