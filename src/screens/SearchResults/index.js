import React from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";

import Post from "../../components/Post";
import feed from "../../../assets/data/feed";

const SearchResultsScreen = () => {
  return (
    <SafeAreaView>
      <FlatList data={feed} renderItem={({ item }) => <Post post={item} />} />
    </SafeAreaView>
  );
};

export default SearchResultsScreen;
