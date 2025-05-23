import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,

    paddingHorizontal: 24,
  },
  text: {
    fontSize: 20,
    color: colors.green[300],
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "red",
    marginBottom: 20,
    padding: 10,
  },
  logo: {
    width: 32,
    height: 38,
  },
});
