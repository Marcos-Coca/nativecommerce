import { StyleSheet } from "react-native"

import theme from "@ui/theme"

export default StyleSheet.create({
  button: {
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 54,
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
  },
  solid: {
    color: theme.colors.fontInverted,
    backgroundColor: theme.colors.primary,
  },
  outline: {
    borderWidth: 1,
    color: theme.colors.fontBase,
    borderColor: theme.colors.fontBase,
    backgroundColor: theme.colors.background,
  },
  text: {},
  buttonText: {
    fontSize: theme.fontSizes.body2,
  },
})
