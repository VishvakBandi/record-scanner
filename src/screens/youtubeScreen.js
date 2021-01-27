import React from "react";
import { Text, View, StyleSheet } from "react-native";

const youtubeVideos = (props) => {
  console.log(props.navigation.state.params.data[1]);
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
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

export default youtubeVideos;
