import { View, Text } from "react-native";
import React from "react";

const WatchingContainer = (props) => {
  return (
    <View
      style={{
        flex: 1,
        borderWidth: 0.5,
        borderColor: "#F4FFFD",
        borderRadius: 10,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <Image
          source={{
            uri: `http://image.tmdb.org/t/p/original${props.imageUri}`,
          }}
        />
      </View>
    </View>
  );
};

export default WatchingContainer;
