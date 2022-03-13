import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useEffect } from 'react'

export default function RatingInput(props) {
  const [review, setReview] = React.useState('')

  useEffect(() => {
    setTimeout(() => {
      props.review(review)
    }, 1000);
  }, [review])
  return (
    <View style={styles.container}>
      <TextInput
            style={styles.text}
            placeholder={"Type your thoughts here"}
            placeholderTextColor={"#e5e5e5"}
            underlineColorAndroid={"transparent"}
            multiline={true}
            onChangeText={(text) => setReview(text)}
            defaultValue={props.alreadyReview}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
        
    },
    text: {
        color: "#d3d3d3",
        marginTop: 20,
        fontSize: 14,
        paddingHorizontal: 20,
        marginTop: 10,
    },

})
