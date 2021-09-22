import React from "react";
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/core";

import Fontisto from "react-native-vector-icons/Fontisto";

import styles from "./styles";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../../../assets/images/wallpaper.jpg")}
        style={styles.image}
      >
        <Pressable
          style={styles.searchButton}
          onPress={() => navigation.navigate("Destination Search")}
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
    </SafeAreaView>
  );
};

export default HomeScreen;
