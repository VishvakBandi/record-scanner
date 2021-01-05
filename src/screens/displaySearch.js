import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const displaySearch = () => {
  return (
    <View style={styles.container}>
      <Text>Display Screen</Text>
      <Text>Use the bottom tab to get to the camera screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default displaySearch;
