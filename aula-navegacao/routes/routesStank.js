import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/HomeStack";
import Sobre from "../screens/Sobre/SobreStack";
import Contato from "../screens/Contato/ContatoStack";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Tela de inicio",
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "#FFF",
        }}
      />
      <Stack.Screen name="Sobre" component={Sobre} />
      <Stack.Screen name="Contato" component={Contato} />
    </Stack.Navigator>
  );
}
