import { FlatList, ImageBackground, ScrollView, View } from "react-native"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"

import styles from "./ProductsMain.style"

import Text from "@ui/Text"
import Button from "@ui/Button"

import MainProductCard from "@products/components/MainProductCard"
import useProducts from "@products/hooks/useProducts"
import { ProductStackParamList } from "@products/screens/routes"
import { ListProduct } from "@products/types"

type ProductsMainProps = NativeStackScreenProps<ProductStackParamList, "Home">

export default function ProductsMain({ navigation }: ProductsMainProps) {
  const { products, error, isLoading } = useProducts()

  const onPressProductCard = (product: ListProduct) => {
    navigation.navigate("Details", {
      productId: product.id,
    })
  }

  if (error) {
    return <Text>Error</Text>
  }

  return (
    <ScrollView style={styles.container}>
      <ImageBackground resizeMode="cover" style={styles.image} source={require("../../../../assets/products-main-background.jpg")}>
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

      <View style={styles.productsContainer}>
        <View style={styles.productsHeader}>
          <View style={styles.sectionTitleContainer}>
            <Text weight="bold" size="headline">
              New
            </Text>
            <Button fill="text">View All</Button>
          </View>
          <Text color="muted" size="caption">
            You have never seen it before
          </Text>
        </View>
        {isLoading ? (
          <Text>Loading</Text>
        ) : (
          <FlatList
            data={products}
            horizontal={true}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ marginRight: 16 }} />}
            renderItem={({ item }) => (
              <View style={styles.productCardContainer}>
                <MainProductCard onPress={onPressProductCard} product={item}></MainProductCard>
              </View>
            )}
          />
        )}
      </View>
    </ScrollView>
  )
}
