import { View, Text } from "react-native"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"

import { ProductStackParamList } from "@products/screens/routes"
import { useEffect } from "react"

type ProductDetailProps = NativeStackScreenProps<ProductStackParamList, "Details">

export default function ProductDetail({ route, navigation }: ProductDetailProps) {
  const { productId } = route.params

  useEffect(() => {
    navigation.setOptions({ title: productId })
  }, [productId])

  return (
    <View>
      <Text>{productId}</Text>
    </View>
  )
}
