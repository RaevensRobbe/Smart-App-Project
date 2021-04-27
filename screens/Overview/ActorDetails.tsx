//@ts-nocheck
import React, { useEffect, useState } from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import { getActorDetails, getActorMovies} from '../../utils/dataAccess';

//Components
import {TitleColumn} from '../../components/TitleColumn';
import {MovieCards} from '../../components/movieCards';
import { CustomButtonSvg } from '../../components/CustomButton';

//Styles
import { background, text } from './../../styles/colors/theme';
import { tussentitel } from './../../styles/components/moreMovies';
import { actorDetails } from './../../styles/components/actorDetails';

const ActorDetails = ({navigation, route}) => {

    const {actor} = route.params;
    console.log(actor);
    const [actorData, setActorData] = useState<string[]>();
    const [actorMovies, setActorMovies] = useState<string[]>();

    const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

    const getActorData = async () => {
        const data = await getActorDetails(actor);
        setActorData(data);
        const movies = await getActorMovies(actor);
        setActorMovies(movies);
    }

    const renderActorData = (props : string[]) => {
        const actorInfo = [];
        if(props != undefined){
            var full_url = IMAGE_URL + actorData[0].profile_path;
            if(actorData[0].profile_path === null) full_url = "https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png";
            // console.log(full_url);

            actorInfo.push(
                <View style={{flex:1}} key={actor}>
                    <View style={[actorDetails.infoContainer]}>
                        <Image source={{uri: full_url}} style={[actorDetails.image]} /> 
                        <View style={[actorDetails.info]}>
                            <Text style={[actorDetails.name, text.neutral[100]]}>{actorData[0].name}</Text>
                            <Text style={[actorDetails.regularText, text.neutral[100]]}>{actorData[0].birthday}{actorData[0].deathday ? ` - ${actorData[0].deathday}` : ""}</Text>
                            <Text style={[actorDetails.regularText, text.neutral[100]]}>{actorData[0].place_of_birth}</Text>
                        </View>
                    </View>
                    <View style={[actorDetails.descriptionContainer, background.neutral[800]]}>
                        <Text style={[actorDetails.description, text.neutral[100]]}>{actorData[0].biography}</Text>
                    </View>

                </View>
            );
        }

        return actorInfo;
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
                        key={i}
                        idMovie={props[i]?.id}
                        picture={props[i]?.poster_path}
                    />
                )
            }
            if (props.length == 0 ){
                simMovies.push(
                    <Text style={[text.neutral[100]]}>No movies found 😢</Text>
                )
            }
        }

        return simMovies;
    }

    useEffect(() => {
        getActorData();
	}, []);

    return(
        
        <SafeAreaView  style={[background.neutral[700], tussentitel.container]}> 
            <ScrollView>
                <View style={{marginLeft:16}}>
                    <CustomButtonSvg tekst="return" />
                </View>
                
                {renderActorData(actorData)}

                <TitleColumn name='Movies' />
                <ScrollView horizontal style={{paddingLeft:16,marginTop:16}}>
                    {renderMovies(actorMovies)}
                </ScrollView>
                <View style={{padding:8}}/>
            </ScrollView>
        </SafeAreaView>

    )
}

export default ActorDetails;