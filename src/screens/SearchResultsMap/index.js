import React, { useState } from "react";
import { View } from "react-native";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import CustomMarker from "../../components/CustomMarker";
import feed from "../../../assets/data/feed";

const SearchResultsMapScreen = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <MapView
        style={{ height: "100%", width: "100%" }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3915637,
          longitude: -16.6291304,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {feed.map((place) => (
          <CustomMarker
            coordinate={place.coordinate}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>
    </View>
  );
};

export default SearchResultsMapScreen;
