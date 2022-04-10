import theme from "@ui/theme"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
  base: {
    color: theme.colors.fontBase,
  },
  inverted: {
    color: theme.colors.fontInverted,
  },
  primary: {
    color: theme.colors.fontPrimary,
  },
  error: {
    color: theme.colors.error,
  },
  muted: {
    color: theme.colors.fontMuted,
  },
  subhead: {
    fontSize: theme.fontSizes.subhead,
  },
  medium: {
    fontSize: theme.fontSizes.body,
  },
  small: {
    fontSize: theme.fontSizes.body2,
  },
  caption: {
    fontSize: theme.fontSizes.caption,
  },
  headline: {
    fontSize: theme.fontSizes.headline,
  },
  headline2: {
    fontSize: theme.fontSizes.headline2,
  },
  headline3: {
    fontSize: theme.fontSizes.headline3,
  },
})
