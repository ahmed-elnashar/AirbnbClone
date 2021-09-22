import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: "100%",
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  iconContainer: {
    backgroundColor: "#e7e7e7",
    padding: 8,
    borderRadius: 10,
    marginRight: 15,
  },
  locationText: {
    fontSize: 18,
  },
});

export default styles;
