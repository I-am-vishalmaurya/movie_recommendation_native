import { View, Text, ScrollView } from "react-native";
import MovieCard from "./MovieCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api_URL } from "../../config/env";

export default function WatchingHistory() {
  const [movieData, setMovieData] = useState([]);

  const getWatchList = async () => {
    const token = await AsyncStorage.getItem("@token");
    let config = {
      method: "get",
      url: `${api_URL.API_URI}/watchlist/`,
      headers: {
        Authorization: token,
      },
    };

    axios(config)
      .then((response) => {
        setMovieData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getWatchList();
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
          YOUR{" "}
        </Text>{" "}
        <Text
          style={{
            color: "white",
          }}
        >
          WATCHLIST
        </Text>
      </Text>
      <View
        style={{
          height: 200,
          marginTop: 20,
        }}
      >
        {movieData && movieData.length > 0 ? (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {movieData.map((item) => (
              <MovieCard
                movie_id={item.movie.id}
                poster_path={item.movie.poster_path}
                key={item.movie.id}
                original_title={item.movie.original_title}
                overview={item.movie.overview}
                genres={item.movie.genres}
                popularity={item.movie.popularity}
                year={item.movie.year}
                status={item.movie.status}
                runtime={item.movie.runtime}
              />
            ))}
          </ScrollView>
        ) : null}
      </View>
    </View>
  );
}
