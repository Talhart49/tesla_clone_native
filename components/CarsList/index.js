import { Text, View, FlatList, Dimensions } from "react-native";
import React, { Component } from "react";

import styles from "./styles";
import cars from "./cars";
import CarItem from "../CarItem";

const CarList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(cars) => cars.name}
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
      <Text> {console.log(cars)} </Text>
    </View>
  );
};

export default CarList;
