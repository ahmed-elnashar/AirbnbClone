import React from "react";
import { FlatList, Text, View } from "react-native";

import Post from "../../../components/post";
import feed from "../../../../assets/data/feed";

const SearchResultsScreen = () => {
  return (
    <View>
      <FlatList data={feed} renderItem={({ item }) => <Post post={item} />} />
    </View>
  );
};

export default SearchResultsScreen;
