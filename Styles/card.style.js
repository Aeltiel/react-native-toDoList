import { StyleSheet } from "react-native";

export const cardStyle = StyleSheet.create({
  card: {
    backgroundColor: "white",
    flexDirection: "row",
    height: 115,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    elevation: 5,
  },
  txt: {
    fontSize: 25,
  },
  img: {
    width: 25,
    height: 25,
  },
});
