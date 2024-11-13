import { View, Button, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeStack() {
  const navigation = useNavigation();

  function navigationSobre() {
    navigation.navigate("Sobre", {
      nome: "Patrick",
      email: "Patrickramosti@gmail.com",
    });
  }

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Sobre" onPress={navigationSobre}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
