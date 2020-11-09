import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting the f**king weater...😎</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    // *CSS
    //bottom: 130,
    //marginLeft: 30,
    // *React Native
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#C6FFDD",
  },
  text: {
    fontSize: 48,
    color: "#2c2c2c",
  },
});
