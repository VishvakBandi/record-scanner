import React from "react";
import { AcitvityIndicator, StyleSheet, Text, View } from "react-native";
import * as SplashScreen from 'expo-splash-screen';

const LoadingScreen = () => {
  state = { appIsReady: false };
  
  componentDidMount = async () => {
    // Prevent native splash screen from autohiding
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    }
    this.prepareResources();
  }

  prepareResources = async () => {
    try {
      await preformAPICalls();
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ appIsReady: true }), async = () => {
        await SplashScreen.hideAsync();
      }
    }
  }

  return (
    <View style={[styless.container, sstyles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" />
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
