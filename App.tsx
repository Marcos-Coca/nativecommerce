import { StyleSheet, View } from "react-native"

import ProductsMain from "@products/screens/ProductsMain"

export default function App() {
  return (
    <View style={styles.container}>
      <ProductsMain />
      {/* <StatusBar style="auto" /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
