import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelS.jpeg")}
        style={styles.image}></ImageBackground>

      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starrting at $69,420</Text>
      </View>
    </View>
  );
};

export default CarItem;
