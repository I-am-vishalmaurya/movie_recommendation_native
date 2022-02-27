import { View, Text, Button } from "react-native";
import React from "react";

export default function GlowBorderButtons(props) {
  const buttonColors = [
    { border: "#E84855", light: "#EF8089" },
    { border: "#44BBA4", light: "#69C9B6" },
    { border: "#7B8CDE", light: "#9DA9E7" },
    { border: "#F9A03F", light: "#FBC488" },
    { border: "#1DEDED", light: "#8EF6F6"}
  ];
  // randomly select the button color
    const randomIndex = Math.floor(Math.random() * buttonColors.length);
    const randomButtonColor = buttonColors[randomIndex];
  return (
    <Text
      style={{
        borderColor: randomButtonColor.border,
        backgroundColor: randomButtonColor.light,
        borderWidth: 2,
        marginLeft: 10,
        textAlign: "center",
        fontSize: 14,
        padding: 5,
        color: "black"
      }}
    >
      {props.genre}
    </Text>
  );
}
