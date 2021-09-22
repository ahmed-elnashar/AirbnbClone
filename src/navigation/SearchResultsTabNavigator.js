import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchResultsScreen from "../screens/SearchResults";

import SearchResultsMapScreen from "../screens/SearchResultsMap";

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#f15454",
        tabBarIndicatorStyle: { backgroundColor: "#f15454" },
      }}
    >
      <Tab.Screen name={"List"} component={SearchResultsScreen} />
      <Tab.Screen name={"Map"} component={SearchResultsMapScreen} />
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
