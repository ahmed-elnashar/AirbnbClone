import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
    justifyContent: "center",
    position: "relative",
  },
  title: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 25,
    marginBottom: -40,
  },
  button: {
    backgroundColor: "#fff",
    width: 200,
    height: 40,
    marginLeft: 25,
    marginTop: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  searchButton: {
    backgroundColor: "#fff",
    height: 60,
    width: Dimensions.get("screen").width - 40,
    borderRadius: 30,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 20,
    zIndex: 100,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 10,
  },
});

export default styles;
