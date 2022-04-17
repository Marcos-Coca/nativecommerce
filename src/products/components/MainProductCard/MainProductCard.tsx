import { Product } from "@products/types"
import { View, Image, TouchableOpacity } from "react-native"

import Card from "@ui/Card"
import Text from "@ui/Text"

import styles from "./MainProductCard.style"

export interface MainProductCardProps {
  product: Product
  onPress: (product: Product) => void
}

export default function MainProductCard({
  product,
  onPress,
}: MainProductCardProps) {
  const handleOnPressCard = () => {
    onPress(product)
  }

  return (
    <TouchableOpacity onPress={handleOnPressCard} style={styles.container}>
      <Card>
        <View>
          <Image
            style={styles.cardImage}
            source={{ uri: product.image }}
          ></Image>
        </View>
        <Text color="muted" size="caption">
          {product.shop}
        </Text>
        <Text style={styles.productTitle} weight="bold">
          {product.title}
        </Text>
        <Text weight="bold">${product.price}</Text>
      </Card>
    </TouchableOpacity>
  )
}
