import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/Home";
import SearchResults from "../screens/SearchResults";

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
        component={SearchResults}
        options={{ title: "Search your destination" }}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;
