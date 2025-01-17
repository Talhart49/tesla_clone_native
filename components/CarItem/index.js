import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import StyledButton from "../StyledButton";


const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image}
       style={styles.image}></ImageBackground>

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
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
    </View>
  );
};

export default CarItem;
