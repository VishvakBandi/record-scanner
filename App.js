import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import ScanScreen from "./src/screens/ScannerScreen";
import HomeScreen from "./src/screens/Home";
import ResultsScreen from "./src/screens/displaySearch";
import LoadingScreen from "./src/screens/loadingScreen";

import { Provider as DiscogsProvider } from "./src/context/discogsContext";

import { setNavigator } from "./src/navigationRef";

const stackNavigator = createStackNavigator({
  mainFlow: createMaterialBottomTabNavigator(
    {
      Home: HomeScreen,
      Scan: ScanScreen,
      Results: ResultsScreen,
    },
    {
      initialRouteName: "Home",
      activeColor: "#f0edf6",
      inactiveColor: "#3e2465",
      barStyle: { backgroundColor: "#694fad" },
    }
  ),
  Loading: LoadingScreen,
});

const App = createAppContainer(stackNavigator);

export default () => {
  return (
    <DiscogsProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </DiscogsProvider>
  );
};
