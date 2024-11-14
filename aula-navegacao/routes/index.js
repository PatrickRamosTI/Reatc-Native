import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Sobre from "../screens/Sobre";
import Contato from "../screens/Contato";
import CustomDrawer from "../components/CustomDrawer";
import Feather from "react-native-vector-icons/Feather";

export default function Routes() {
  const Drawer = createDrawerNavigator();
  return (
      <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
          drawerActiveBackgroundColor: "rgba(0, 249, 214, 0.5)",
          drawerInactiveBackgroundColor: "rgba(0, 249, 214, 0.5)",
          drawerActiveTintColor: "rgba(0, 249, 214, 0.5))",
          drawerInactiveTintColor: "rgba(0, 249, 214, 0.5)",
          drawerStyle: {
              backgroundColor: "#00000080",
              width: 250,
            },
        }}
        >
        <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Sobre"
        component={Sobre}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contato"
        component={Contato}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="message-square" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
