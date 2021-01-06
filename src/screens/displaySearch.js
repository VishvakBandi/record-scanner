import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const displaySearch = (props) => {
  //const navigation = this.props.navigation;
  //const response = navigation.getParam("response", null);

  //console.log(props);

  return (
    <View style={styles.container}>
      <Text>Display Screen</Text>
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

export default displaySearch;
