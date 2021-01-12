import React from "react";
import { ActivityIndicator, Text, View, StyleSheet } from "react-native";

const LoadingScreen = (props) => {
  return (
    <View style={[styles.containter, styles.horizontal]}>
      <ActivityIndicator animating={true} color="black" size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default LoadingScreen;
