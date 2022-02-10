import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const MovieCard = (props) => {
  return (
    <View
      style={{
        height: 200,
        width: 100,
        marginLeft: 20,
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
    </View>
  );
};

export default MovieCard;
