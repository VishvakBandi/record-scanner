import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import ScanScreen from "./src/screens/ScannerScreen";
import HomeScreen from "./src/screens/Home";
import ResultsScreen from "./src/screens/displaySearch";

import { Provider as DiscogsProvider } from "./src/context/discogsContext";

import { setNavigator } from "./src/navigationRef";

import Icon from "react-native-vector-icons/Ionicons";

const stackNavigator = createStackNavigator({
  mainFlow: createMaterialBottomTabNavigator(
    {
      Home: {
        screen: HomeScreen,
        navigationOptions: {
          tabBarLabel: "Home",
          tabBarIcon: () => <Icon name="ios-home" color="white" size={25} />,
        },
      },
      Scan: {
        screen: ScanScreen,
        navigationOptions: {
          tabBarLabel: "Scan",
          tabBarIcon: () => <Icon name="scan-sharp" color="white" size={25} />,
        },
      },
    },
    {
      initialRouteName: "Home",
      activeColor: "#f0edf6",
      inactiveColor: "#3e2465",
      barStyle: { backgroundColor: "#694fad" },
    }
  ),
  Results: ResultsScreen,
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
