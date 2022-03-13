import { View, Text, ScrollView } from "react-native";
import MovieCard from "./MovieCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api_URL } from "../../config/env";

export default function TopMovies() {
  const [topMovies, setTopMovies] = useState([]);
  const getTopMovies = async () => {
    const token = await AsyncStorage.getItem("@token");
    let config = {
      method: "get",
      url: `${api_URL.API_URI}/movies/top/`,
      headers: {
        Authorization: token,
      },
    };

    axios(config)
      .then((response) => {
        setTopMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTopMovies();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: "#fff",
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "800",
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            color: "#52b788",
          }}
        >
          TRENDING{" "}
        </Text>{" "}
        <Text
          style={{
            color: "white",
          }}
        >
          MOVIES
        </Text>
      </Text>
      <View
        style={{
          height: 200,
          marginTop: 20,
        }}
      >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {topMovies.map((movie) => (
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
    </View>
  );
}
