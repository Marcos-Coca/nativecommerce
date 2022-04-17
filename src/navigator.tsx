import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import ProductStackScreen from "@products/screens/routes"

const Tab = createBottomTabNavigator()

function Navigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={ProductStackScreen}
      ></Tab.Screen>
    </Tab.Navigator>
  )
}

export default Navigator
