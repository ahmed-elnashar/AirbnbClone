import React from "react";
import { Text, View } from "react-native";

import { Marker } from "react-native-maps";

import styles from "./styles";

const CustomMarker = ({ coordinate, price, onPress, isSelected }) => {
  return (
    <Marker
      coordinate={{
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
      }}
      onPress={onPress}
    >
      <View
        style={[styles.markerContainer, isSelected ? styles.isSelected : {}]}
      >
        <Text
          style={[styles.markerText, isSelected ? styles.isSelectedText : {}]}
        >
          ${price}
        </Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
