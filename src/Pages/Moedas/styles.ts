import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerScreen: {
    flex: 1,
    justifyContent: "center",
  },
  containerButtons: {
    flexDirection: "row",
    margin: 16,
  },
  Buttons: {
    flex: 1,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
    margin: 5,
    borderRadius: 4,
  },
  TextButtons: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
  containerValores: {
    alignItems: "center",
    marginBottom: 30,
  },
  TextValor: {
    fontSize: 28,
  },
});
