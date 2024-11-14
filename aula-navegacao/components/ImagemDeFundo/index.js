import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

export default function ImagemDeFundo({ children }) {
    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/anjo.jpg")}
          style={styles.backgroundImage}
        />
        <View style={styles.content}>
          {children}
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
    content: {
      flex: 1,
    },
  });