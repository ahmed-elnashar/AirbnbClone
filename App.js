import React from "react";
import { SafeAreaView, StatusBar } from "react-native";

import HomeScreen from "./src/screens/Home";
import SearchResultsScreen from "./src/screens/SearchResults";
import DestinationSearchScreen from "./src/screens/DestinationSearch";
import GuestsScreen from "./src/screens/Guests";
import Post from "./src/components/post";
import feed from "./assets/data/feed";

const post1 = feed[0];

const App = () => {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView>
        <GuestsScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
