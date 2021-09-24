import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeTabNavigator from "./HomeTabNavigator";

import HomeScreen from "../screens/Home";
import DestinationSearch from "../screens/DestinationSearch";
import GuestsScreen from "../screens/Guests";
import PostScreen from "../screens/PostScreen";
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={HomeTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={DestinationSearch}
          name={"Destination Search"}
          options={{ title: "Search Your Destination" }}
        />
        <Stack.Screen
          component={GuestsScreen}
          name={"Guests"}
          options={{ title: "How many People" }}
        />
        <Stack.Screen
          component={PostScreen}
          name={"PostDetail"}
          options={{ title: "Accommodation Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
