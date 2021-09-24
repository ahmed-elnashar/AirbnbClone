import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/Home";
import SearchResultsTabNavigator from "./SearchResultsTabNavigator";
import SearchResultsMapScreen from "../screens/SearchResultsMap";

const Stack = createNativeStackNavigator();

const ExploreNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Welcome"}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"SearchResults"}
        component={SearchResultsTabNavigator}
        options={{ title: "Search your destination" }}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;
