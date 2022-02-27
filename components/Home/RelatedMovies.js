import { View, Text, ScrollView } from "react-native";
import MovieCard from "./MovieCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api_URL } from "../../config/env";

export default function RelatedMovies(props) {
    const [data, setData] = useState([]);

  const getRecommended = async (title) => {
    const body = {
        movie: title
    }
    const token = await AsyncStorage.getItem('@token')
    let config = {
      method: "post",
      url: `${api_URL.API_URI}/ml/recommend/`,
      headers: {
        Authorization: token,
      },
      data: body,
    };

    axios(config)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getRecommended(props.original_title)
  }, [props.original_title])
  return (
      <View
        style={{
          height: 300,
        }}
      >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {data.map((movie) => (
            
            <MovieCard
              movie_id={movie.id}
              poster_path={movie.poster_path}
              key={movie.id}
              original_title={movie.original_title}
              overview={movie.overview}
              genres={movie.genres}
              popularity={movie.popularity}
              year={movie.year}
              status={movie.status}
              runtime={movie.runtime}
            />
          ))}
        </ScrollView>
      </View>
  );
}
