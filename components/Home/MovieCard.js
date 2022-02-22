import React from "react";
import {
  View,
  Text,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const MovieCard = ({navigation}, props) => {
  return (
    <TouchableOpacity
      style={{
        height: 200,
        width: 100,
        marginLeft: 20,
      }}
      onPress={() => {
        
      }}
    >
      <View
        style={{
          flex: 2,
        }}
      >
        <Image
          source={{
            uri: `http://image.tmdb.org/t/p/original${props.imageUri}`,
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
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
