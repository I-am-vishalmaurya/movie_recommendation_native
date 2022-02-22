import { View, Text } from 'react-native'
import React from 'react'

const details = {
    "id": 36,
    "tmdb_id": 807,
    "original_title": "Se7en",
    "original_language": "en",
    "overview": "Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the \"seven deadly sins\" in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Sommerset researches each sin in an effort to get inside the killer's mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.",
    "genres": "['Crime', 'Mystery', 'Thriller']",
    "popularity": 18.45743,
    "poster_path": "/69Sns8WoET6CfaYlIkHbla4l7nC.jpg",
    "production_company": "[{'name': 'New Line Cinema', 'id': 12}, {'name': 'Juno Pix', 'id': 4286}, {'name': 'Cecchi Gori Pictures', 'id': 65394}]",
    "vote_average": 8.1,
    "vote_count": 5915,
    "revenue": 327311859,
    "year": 1995,
    "adult": false,
    "budget": 33000000,
    "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
    "status": "Released",
    "runtime": 127
}

export default function MovieDetails(props) {
  return (
    <View style={{
        flex: 1,
        flexDirection: 'row',

    }}>
        <View style={{
            flex: 2,

        }}>
            <Image
                source={{
                    uri: `http://image.tmdb.org/t/p/original${details.poster_path}`,
                }}
                style={{
                    flex: 1,
                    resizeMode: "cover",
                    borderRadius: 10,
                }}
            />
        </View>
        <View style={{
            flex: 1,
            paddingLeft: 10,
            paddingTop: 10,
            alignItems: "center",
        }}>
            <Text
                style={{
                    fontSize: 14,
                    color: "#adb5bd",
                }}
            >
                {details.original_title}
            </Text>
        </View>
    </View>
  )
}