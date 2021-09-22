import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/core";

import styles from "./styles";
import Entypo from "react-native-vector-icons/Entypo";
import search from "../../../assets/data/search";

const DestinationSearchScreen = () => {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={"Where are you going"}
        value={inputText}
        onChange={setInputText}
      />

      <FlatList
        data={search}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("Guests")}
            style={styles.row}
          >
            <View style={styles.iconContainer}>
              <Entypo name={"location-pin"} size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
};

export default DestinationSearchScreen;
