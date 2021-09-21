import React, { useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";

import styles from "./styles";
import Entypo from "react-native-vector-icons/Entypo";
import search from "../../../assets/data/search";

const DestinationSearchScreen = () => {
  const [inputText, setInputText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={"Where are you going"}
        value={inputText}
        onChange={setInputText}
      />

      <FlatList
        data={search}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={"location-pin"} size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
