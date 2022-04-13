import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 500,
  },
  image: {
    flex: 1,
    height: 500,
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
    marginBottom: 40,
    paddingHorizontal: 14,
  },
  productsHeader: {
    marginBottom: 22,
  },
  sectionTitleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  productCardContainer: {
    width: 150,
    overflow: "hidden",
  },
})
