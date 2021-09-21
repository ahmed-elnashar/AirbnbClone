import React from "react";
import { SafeAreaView, StatusBar } from "react-native";

import HomeScreen from "./src/screens/Home";

const App = () => {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
