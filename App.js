import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import ScanScreen from "./src/screens/ScannerScreen";
import HomeScreen from "./src/screens/Home";
import ResultsScreen from "./src/screens/displaySearch";

import { Provider as DiscogsProvider } from "./src/context/discogsContext";

import { setNavigator } from "./src/navigationRef";

const switchNavigator = createSwitchNavigator({
  mainFlow: createBottomTabNavigator({
    Home: HomeScreen,
    Scan: ScanScreen,
    Results: ResultsScreen,
  }),
});

const App = createAppContainer(switchNavigator);

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
