import React from "react";
import { SafeAreaView, View } from "react-native";
import { useNavigation } from "@react-navigation/core";

import styles from "./styles";
import { GOOGLE_API_KEY } from "../../utils/api_keys";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import SuggestionRow from "./SuggestionRow";

const DestinationSearchScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate("Guests");
        }}
        fetchDetails
        query={{
          key: GOOGLE_API_KEY,
          language: "en",
          type: "(cities)",
        }}
        styles={{
          textInput: {
            fontSize: 20,
          },
        }}
        suppressDefaultStyles
        renderRow={(item) => <SuggestionRow item={item} />}
      />
    </SafeAreaView>
  );
};

export default DestinationSearchScreen;
