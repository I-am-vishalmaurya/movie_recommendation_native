import { View, Text } from "react-native";
import Ratings from "../UI/Ratings";
import RatingInput from "../UI/RatingInput";
import Buttons from "../UI/Buttons/Buttons";
import React from "react";
import { rateMovie } from "../../redux/actions";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { api_URL } from "../../config/env";

export default function RateMovie(props) {
  const [movieRatings, setMovieRatings] = React.useState({
    review: null,
    ratings: null,
  });
  const [existsMovieRatings, setExistsMovieRatings] = React.useState({
    id: null,
    rating: null,
    review: null,
    timestamp: null,
    movie: null,
    user: null,
  });

  const dispatch = useDispatch();

  const getReviewFromChildComponent = (review) => {
    setMovieRatings({
      ...movieRatings,
      review: review,
    });
  };

  const getRatingFromChildComponent = (rating) => {
    setMovieRatings({
      ...movieRatings,
      ratings: rating,
    });
  };

  const getReviewIfExists = async (id) => {
    try {
      const token = await AsyncStorage.getItem("@token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      };
      const res = await axios.get(
        `${api_URL.API_URI}/movies/get_rating/${id}`,
        config
      );
      if (res.status === 200) {
        setExistsMovieRatings(res.data);
      }
    } catch (e) {
      setExistsMovieRatings({
        id: null,
        rating: null,
        review: null,
        timestamp: null,
        movie: null,
        user: null,
      })
    }
  };

  const onSubmit = () => {
    dispatch(
      rateMovie(props.movieId, movieRatings.ratings, movieRatings.review)
    );
  };

  React.useEffect(() => {
    getReviewIfExists(props.movieId);
  }, [props.movieId]);
  return (
    <>
      {existsMovieRatings.id ? (
        <View
          style={{
            flex: 1,
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
            You Rated {props.original_title}
          </Text>
          <View
            style={{
              marginBottom: 10,
              flex: 1,
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "start",
            }}
          >
            <Ratings
              rate={getRatingFromChildComponent}
              alreadyRated={existsMovieRatings.rating}
            />
          </View>
          <View
            style={{
              marginBottom: 20,
              flex: 1,
              flexDirection: "row",
            }}
          >
            <RatingInput
              review={getReviewFromChildComponent}
              alreadyReview={existsMovieRatings.review}
            />
          </View>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 20,
            }}
          >
            {/* Submit Button */}
            <Buttons title="Post" submit={onSubmit} />
          </View>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
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
            Rate {props.original_title}
          </Text>
          <View
            style={{
              marginBottom: 10,
              flex: 1,
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "start",
            }}
          >
            <Ratings rate={getRatingFromChildComponent} />
          </View>
          <View
            style={{
              marginBottom: 20,
              flex: 1,
              flexDirection: "row",
            }}
          >
            <RatingInput review={getReviewFromChildComponent} />
          </View>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 20,
            }}
          >
            {/* Submit Button */}
            <Buttons title="Post" submit={onSubmit} />
          </View>
        </View>
      )}
    </>
  );
}
