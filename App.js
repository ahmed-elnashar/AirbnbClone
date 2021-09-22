import React from "react";
import { SafeAreaView, StatusBar } from "react-native";

import Router from "./src/navigation/Router";
import GuestsScreen from "./src/screens/Guests";
const App = () => {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <Router />
    </>
  );
};

export default App;
