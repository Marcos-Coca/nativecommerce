import {
  StyleProp,
  StyleSheet,
  Text as NativeText,
  TextStyle,
  ViewStyle,
} from "react-native"

import styles from "./Text.style"

export interface TextProps {
  style?: StyleProp<TextStyle>
  color?: "base" | "primary" | "inverted" | "error" | "muted"
  size?:
    | "headline"
    | "headline2"
    | "headline3"
    | "subhead"
    | "medium"
    | "small"
    | "caption"
  children?: string
  weight?: "bold" | "semibold" | "normal" | "medium"
}

export default function Text({
  children,
  style = {},
  color = "base",
  size = "medium",
  weight = "normal",
}: TextProps) {
  const textStyles = StyleSheet.flatten([
    styles[size],
    styles[color],
    { fontWeight: weight } as ViewStyle,
    style,
  ])

  return <NativeText style={textStyles}>{children}</NativeText>
}
