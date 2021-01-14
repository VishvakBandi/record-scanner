import React from "react";
import { ActivityIndicator, Text, View, StyleSheet } from "react-native";

const LoadingScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.materialSpinnerStack}>
        <ActivityIndicator
          style={styles.materialSpinner}
          animating={true}
          color="black"
          size="large"
        />
        <Text style={styles.loading}>{props.loadingText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  materialSpinner: {
    width: 50,
    height: 50,
    left: 0,
    top: 0,
  },
  loading: {
    top: 43,
    left: 0,
    position: "absolute",
    color: "#121212",
  },
  materialSpinnerStack: {
    alignSelf: "center",
  },
});

export default LoadingScreen;
