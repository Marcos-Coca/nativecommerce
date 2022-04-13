import { Product } from "@products/types"
import { View, Image } from "react-native"

import Card from "@ui/Card"
import Text from "@ui/Text"

import styles from "./MainProductCard.style"

export interface MainProductCardProps {
  product: Product
}

export default function MainProductCard({ product }: MainProductCardProps) {
  return (
    <View style={styles.container}>
      <Card>
        <View>
          <Image
            style={styles.cardImage}
            source={require("../../../../assets/products-main-background.jpg")}
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
    </View>
  )
}
