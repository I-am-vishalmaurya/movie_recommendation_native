import { View, Text, ScrollView } from "react-native";
import MovieCard from "./MovieCard";
import React, { useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api_URL } from "../../config/env";

export default function WatchingHistory() {
  const dummyData = [];
  const [data, setData] = React.useState([]);

  const getWatchList = async () => {
      const token = await AsyncStorage.getItem('@token');
    let config = {
      method: "get",
      url: `${api_URL.API_URI}/watchlist/`,
      headers: {
        Authorization: token,
      },
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
      getWatchList()
  }, [])
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
          WATCHING{" "}
        </Text>{" "}
        <Text
          style={{
            color: "white",
          }}
        >
          HISTORY
        </Text>
      </Text>
      <View
        style={{
          height: 200,
          marginTop: 20,
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
    </View>
  );
}
