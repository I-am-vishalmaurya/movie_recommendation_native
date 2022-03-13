import { View, Text, StyleSheet} from "react-native";
import React from "react";
import { AirbnbRating } from "react-native-elements";

export default function Ratings(props) {

  const getRatings = (rating) => {
    props.rate(rating)
  }
  return (
    <View style={styles.container}>
      <AirbnbRating
        count={10}
        reviews={[
          "Terrible",
          "Bad",
          "Meh",
          "OK",
          "Good",
          "Hmm...",
          "Very Good",
          "Wow",
          "Amazing",
          "Unbelievable",
          "Jesus",
        ]}
        defaultRating={props.alreadyRated}
        size={20}
        onFinishRating={getRatings}
      />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})