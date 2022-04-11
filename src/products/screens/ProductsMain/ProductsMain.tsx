import { useEffect } from "react"
import { FlatList, ImageBackground, ScrollView, View } from "react-native"
import useSWR from "swr"

import styles from "./ProductsMain.style"

import Text from "@ui/Text"
import Button from "@ui/Button"
import product from "@products/services/product"

export default function ProductsMain() {
  const { data, error, isValidating } = useSWR(" ", product.search)
  useEffect(() => {}, [data, error, isValidating])

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={require("../../../../assets/products-main-background.jpg")}
      >
        <View style={styles.imageContent}>
          <Text weight="bold" style={styles.title} color="inverted">
            Fashion
          </Text>
          <Text weight="bold" style={styles.title} color="inverted">
            sale
          </Text>
          <Button fill="solid">Check</Button>
        </View>
      </ImageBackground>

      <ScrollView style={styles.productsContainer}>
        <View style={styles.sectionTitleContainer}>
          <Text weight="bold" size="headline">
            New
          </Text>
          <Button fill="text">View All</Button>
        </View>
        <Text color="muted" size="caption">
          You have never seen it before
        </Text>
      </ScrollView>

      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}
