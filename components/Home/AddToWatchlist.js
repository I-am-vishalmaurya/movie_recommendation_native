import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { addToWatchList } from "../../redux/actions";
import { useDispatch } from "react-redux";
import axios from "axios";

export default function AddToWatchlist(props) {
  console.log(props.movieId);
  const dispatch = useDispatch();

  const onAddBookMark = () => {
    dispatch(addToWatchList(props.movieId));
  };
  return (
    <TouchableOpacity onPress={onAddBookMark}>
      {/* Icons for addition */}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "transparent",
          alignContent: "center",
        }}
      >
        <Icon name="bookmark" type="font-awesome5" color="white" />
        <Text style={styles.textButton}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textButton: {
    fontSize: 14,
    color: "white",
    justifyContent: "center",
    alignContent: "center",
  },
});
