import { StyleSheet, TouchableOpacity } from "react-native"

import Text from "@ui/Text"

import styles from "./Button.style"

export interface ButtonProps {
  children?: string
  size?: "small" | "full"
  fill?: "solid" | "outline" | "text"
}

export default function Button({ children, fill = "solid" }: ButtonProps) {
  const buttonStyles = StyleSheet.flatten([
    styles[fill],
    fill !== "text" ? styles.button : {},
  ])

  return (
    <TouchableOpacity activeOpacity={0.8} style={buttonStyles}>
      <Text size="small" color={fill === "solid" ? "inverted" : "base"}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}
