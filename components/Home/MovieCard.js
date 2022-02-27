import React from "react";
import {
  View,
  Text,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MovieCard = (props) => {

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        height: 200,
        width: 100,
        marginLeft: 20,
      }}
      onPress={() => {
        navigation.navigate("MovieDetail", {
          movieDetails: props,
          });
        
      }}
    >
      <View
        style={{
          flex: 2,
        }}
      >
        <Image
          source={{
            uri: `http://image.tmdb.org/t/p/original${props.poster_path}`,
          }}
          style={{
            flex: 1,
            resizeMode: "cover",
            borderRadius: 10,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          paddingLeft: 10,
          paddingTop: 10,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: "#adb5bd",
          }}
        >
          {props.original_title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
