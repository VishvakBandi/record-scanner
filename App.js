import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import ScanScreen from "./src/screens/ScannerScreen";

import { setNavigator } from "./src/navigationRef";

const switchNavigator = createSwitchNavigator({
  mainFlow: createBottomTabNavigator({
    Scan: ScanScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <App
      ref={(navigator) => {
        setNavigator(navigator);
      }}
    />
  );
};
