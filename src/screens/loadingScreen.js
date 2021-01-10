import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

const LoadingScreen = (props) => {
  return (
    <View>
      <ActivityIndicator
        animating={true}
        color="white"
        size="large"
        style={{ margin: 15 }}
      />

      <Text>{props.loadingText}</Text>
    </View>
  );
};

export default LoadingScreen;
