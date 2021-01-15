import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";

class LoadingScreen extends React.Component {
  state = { appIsReady: false };

  async componentDidMount() {
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
      this.setState({ appIsReady: true }, async () => {
        await SplashScreen.hideAsync();
      });
    }
  };

  render() {
    if (!this.state.appIsReady) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Searching... 🔍</Text>
      </View>
    );
  }
}

// Put any code you need to prepare your app in these functions
/* async function performAPICalls() {
  const { state, barcodeSearch, clearErrorMessage } = useContext(
    DiscogsContext
  );
}
async function downloadAssets() {}
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#aabbcc",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

export default LoadingScreen;
