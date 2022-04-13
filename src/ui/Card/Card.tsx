import toCapitalize from "@utils/toCapitalize"
import { ReactNode, useEffect, useState } from "react"
import { View, ViewStyle } from "react-native"

import styles from "./Card.style"

export interface CardProps {
  children: ReactNode

  shadow?: "none" | "sm" | "md" | "lg"
}

export default function Card({ children, shadow = "none" }: CardProps) {
  const [selectedShadow, setSelectedShadow] = useState<ViewStyle>({})

  useEffect(() => {
    if (shadow !== "none") {
      const selectedShadow =
        styles[`shadow${toCapitalize<"Sm" | "Md" | "Lg">(shadow)}`]
      setSelectedShadow(selectedShadow)
    } else {
      setSelectedShadow({})
    }
  }, [shadow])

  return <View style={[styles.container, selectedShadow]}>{children}</View>
}
