import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from "react-native";
import AddToWatchlist from "../components/Home/AddToWatchlist";
import RateMovie from "../components/Home/RateMovie";
import RelatedMovies from "../components/Home/RelatedMovies";
import GlowBorderButtons from "../components/UI/Buttons/GlowBorderButtons";

const MovieDetailStackScreen = ({ route }) => {
  return (
    <SafeAreaView>
      <ScrollView scrollEventThrottle={16}>
        <View
          style={{
            flex: 1,
            height: 400,
          }}
        >
          <ImageBackground
            source={{
              uri: `http://image.tmdb.org/t/p/original${route.params.movieDetails.poster_path}`,
            }}
            style={{
              resizeMode: "contain",
              width: "100%",
              height: "100%",
            }}
            imageStyle={{
              opacity: 0.8,
            }}
          />
        </View>
        <View>
          {/* Text with movie title */}
          <View
            style={{
              flex: 1,
              marginTop: 20,
              paddingHorizontal: 20,
              alignItems: "start",
              justifyContent: "start",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 28,
                fontWeight: "700",
              }}
            >
              {route.params.movieDetails.original_title}
            </Text>
          </View>

          {/* Genres button  */}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              marginTop: 20,
              paddingHorizontal: 20,
            }}
          >
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{
                paddingHorizontal: 10,
                borderRadius: 10,
              }}
            >
              {route.params.movieDetails.genres
                .replace(/[\[\]']+/g, "")
                .split(",")
                .map((genre) => (
                  <GlowBorderButtons genre={genre} key={Math.random()} />
                ))}
            </ScrollView>
          </View>

          {/* Overview for the movie */}
          <View
            style={{
              marginTop: 20,
              paddingHorizontal: 20,
              alignItems: "start",
              justifyContent: "start",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "400",
              }}
            >
              {route.params.movieDetails.overview}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 20,
              marginTop: 20,
            }}
          >
            <AddToWatchlist title={"Add to Watchlist"} movieId={route.params.movieDetails.movie_id}/>
          </View>

          <RateMovie
            original_title={route.params.movieDetails.original_title}
            movieId={route.params.movieDetails.movie_id}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "800",
                color: "white",
                paddingHorizontal: 20,
              }}
            >
              Related Movies
            </Text>
          </View>
          <View
            style={{
              marginTop: 40,
            }}
          >
            <RelatedMovies
              original_title={route.params.movieDetails.original_title}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetailStackScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000025",
  },
  text: {
    color: "#000",
    fontWeight: "700",
    fontSize: 30,
  },
});
