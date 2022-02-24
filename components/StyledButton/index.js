import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./styles";

const StyledButton = ({ type, content, onPress }) => {
  const backgroundColor = type === "primary" ? "#3C3F44" : "white";
  const textColor = type === "primary" ? "#FFFFFF" : "#171A20";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={onPress}>
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
