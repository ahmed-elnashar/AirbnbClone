import React, { useEffect, useRef, useState } from "react";
import { FlatList, useWindowDimensions, View } from "react-native";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import CustomMarker from "../../components/CustomMarker";
import feed from "../../../assets/data/feed";
import styles from "./styles";
import PostCarouselItem from "../../components/PostCarouselItem";
const SearchResultsMapScreen = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  const flatList = useRef();
  const map = useRef();

  const viewabilityConfig = useRef({ itemVisiblePercentThreshold: 70 });

  const onViewChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });

  useEffect(() => {
    if (!selectedPlaceId || !flatList) {
      return;
    }
    const index = feed.findIndex((place) => place.id === selectedPlaceId);
    flatList.current.scrollToIndex({ index });

    const selectedPlace = feed[index];
    const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
      latitudeDelta: 0.2,
      longitudeDelta: 0.2,
    };
    map.current.animateToRegion(region);
  }, [selectedPlaceId]);

  const width = useWindowDimensions().width;

  return (
    <View style={{ height: "100%", width: "100%" }}>
      <MapView
        ref={map}
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
      <View style={styles.postCarouselContainer}>
        <FlatList
          ref={flatList}
          data={feed}
          renderItem={({ item }) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 6}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          viewabilityConfig={viewabilityConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMapScreen;
