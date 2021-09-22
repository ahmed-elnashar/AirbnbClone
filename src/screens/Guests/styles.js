import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    height: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  titleLeft: {
    fontWeight: "bold",
  },
  subTitleLeft: {
    color: "lightgray",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#474747",
  },
  buttonValue: {
    marginHorizontal: 20,
    fontSize: 16,
  },
  search: {
    marginBottom: 20,
    backgroundColor: "#f15454",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  searchText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default styles;
