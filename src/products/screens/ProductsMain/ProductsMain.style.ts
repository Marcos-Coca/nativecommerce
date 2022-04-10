import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    flexBasis: "40%",
    justifyContent: "center",
  },
  imageContent: {
    flex: 1,
    marginBottom: 32,
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 48,
  },
  productsContainer: {
    flex: 1,
    marginTop: 33,
    paddingHorizontal: 14,
  },
  sectionTitleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
})
