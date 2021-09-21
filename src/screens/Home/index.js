import React from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";

import Fontisto from "react-native-vector-icons/Fontisto";

import styles from "./styles";

const HomeScreen = () => {
  return (
    <View>
      <ImageBackground
        source={require("../../../assets/images/wallpaper.jpg")}
        style={styles.image}
      >
        <Pressable
          style={styles.searchButton}
          onPress={() => console.warn("Search Button")}
        >
          <Fontisto name={"search"} size={20} color={"#f15454"} />
          <Text style={styles.searchButtonText}>Where are you going?</Text>
        </Pressable>
        <Text style={styles.title}>Go</Text>
        <Text style={styles.title}>Near</Text>
        <Pressable
          style={styles.button}
          onPress={() => console.warn("Explore Button")}
        >
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
