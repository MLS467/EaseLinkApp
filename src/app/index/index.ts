import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,
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
    marginBottom: 20,
    paddingHorizontal: 24,
  },
  logo: {
    width: 32,
    height: 38,
  },
  containerList: {
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
  },
  contentList: {
    gap: 20,
    padding: 24,
    paddingBottom: 100,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContent: {
    borderTopWidth: 1,
    borderTopColor: colors.gray[900],
  },
  modalTitle: {
    fontSize: 22,
    color: colors.gray[300],
  },
  modalHeader: {
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.gray[900],
    justifyContent: "space-between",
  },
  modalUrl: {
    backgroundColor: colors.gray[900],
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
});
