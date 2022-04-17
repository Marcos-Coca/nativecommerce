import { createNativeStackNavigator } from "@react-navigation/native-stack"

import ProductsMain from "@products/screens/ProductsMain"
import ProductDetail from "@products/screens/ProductDetail"

export type ProductStackParamList = {
  Home: undefined
  Details: { productId: string }
}

const ProductStack = createNativeStackNavigator<ProductStackParamList>()

function ProductStackScreen() {
  return (
    <ProductStack.Navigator initialRouteName="Home">
      <ProductStack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={ProductsMain}
      />

      <ProductStack.Screen name="Details" component={ProductDetail} />
    </ProductStack.Navigator>
  )
}

export default ProductStackScreen
