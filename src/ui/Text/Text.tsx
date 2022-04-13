import { ReactNode } from "react"
import {
  StyleProp,
  Text as NativeText,
  TextStyle,
  ViewStyle,
} from "react-native"

import styles from "./Text.style"

export interface TextProps {
  style?: StyleProp<TextStyle>
  color?: "base" | "primary" | "inverted" | "error" | "muted"
  size?: "headline" | "headline2" | "headline3" | "medium" | "small" | "caption"
  children?: ReactNode
  weight?: "bold" | "semibold" | "normal" | "medium"
}

export default function Text({
  children,
  style = {},
  color = "base",
  size = "medium",
  weight = "normal",
}: TextProps) {
  return (
    <NativeText
      style={[
        styles[size],
        styles[color],
        { fontWeight: weight } as ViewStyle,
        style,
      ]}
    >
      {children}
    </NativeText>
  )
}
