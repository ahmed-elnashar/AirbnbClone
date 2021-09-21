import React from "react";
import { SafeAreaView, StatusBar } from "react-native";

import HomeScreen from "./src/screens/Home";
import Post from "./src/components/post";

const App = () => {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        <Post />
      </SafeAreaView>
    </>
  );
};

export default App;
