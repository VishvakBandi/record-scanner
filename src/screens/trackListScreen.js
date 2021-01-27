import React, { useState, useContext, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import Loading from "../components/loadingScreen";

import { Context as DiscogsContext } from "../context/discogsContext";

const trackScreen = (props) => {
  console.log(props);

  return (
    <View style={styles.container}>
      <Text>track Screen</Text>
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

export default trackScreen;
