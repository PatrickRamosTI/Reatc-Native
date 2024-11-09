import { View, Text, StyleSheet, LogBox } from "react-native";
import React from "react";

export default function AppFlexCaixa() {
  return(
      <View style={styles.container}>
        <View style={styles.box}>
          <Text>Voltar</Text>
          <Text>inicio</Text>
          <Text>Menu</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  box: {
    fontSize: 15,
    backgroundColor: '#784',
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 25
  }
});