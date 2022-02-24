import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import StyledButton from "../StyledButton";

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
      <StyledButton
        type='primary'
        content={"Custom Order"}
        onPress={() => {
          console.log("Order");
        }}
      />
      <StyledButton
        type='Secondary'
        content={"Existing Inventory"}
        onPress={() => {
          console.log("Inventory");
        }}
      />
    </View>
  );
};

export default CarItem;
