import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

import styles from "./styles";

const GuestsScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const handleChange = (value, operation) => {
    if (operation === "minus") {
      if (value === "adults") {
        return adults <= 0 ? 0 : setAdults(adults - 1);
      }

      if (value === "children") {
        return children <= 0 ? 0 : setChildren(children - 1);
      }

      if (value === "infants") {
        return infants <= 0 ? 0 : setInfants(infants - 1);
      }
    } else if (operation === "plus") {
      switch (value) {
        case "adults":
          return setAdults(adults + 1);
        case "children":
          return setChildren(children + 1);
        case "infants":
          return setInfants(infants + 1);
        default:
          return;
      }
    }
  };
  return (
    <View>
      <View style={styles.row}>
        <View>
          <Text style={styles.titleLeft}>Adults</Text>
          <Text style={styles.subTitleLeft}>Ages 13 or above</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable
            onPress={() => handleChange("adults", "minus")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
          <Text style={styles.buttonValue}>{adults}</Text>
          <Pressable
            onPress={() => handleChange("adults", "plus")}
            style={styles.button}
          >
            <Text>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={styles.titleLeft}>Children</Text>
          <Text style={styles.subTitleLeft}>Ages 2 - 12</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable
            onPress={() => handleChange("children", "minus")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
          <Text style={styles.buttonValue}>{children}</Text>
          <Pressable
            onPress={() => handleChange("children", "plus")}
            style={styles.button}
          >
            <Text>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={styles.titleLeft}>Infants</Text>
          <Text style={styles.subTitleLeft}>Under 2</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable
            onPress={() => handleChange("infants", "minus")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
          <Text style={styles.buttonValue}>{infants}</Text>
          <Pressable
            onPress={() => handleChange("infants", "plus")}
            style={styles.button}
          >
            <Text>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default GuestsScreen;
