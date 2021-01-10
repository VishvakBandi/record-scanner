import React, { useState, useContext } from "react";
import { render } from "react-dom";
import { Text, View, StyleSheet, Image } from "react-native";

import Loading from "./loadingScreen";

import { Context as DiscogsContext } from "../context/discogsContext";

const displaySearch = (props) => {
  const data = props.navigation.state.params.data;
  let response;

  const [isLoading, setIsLoading] = useState(true);

  const { state, barcodeSearch, clearErrorMessage } = useContext(
    DiscogsContext
  );

  const loadData = () => async () => {
    setIsLoading(true);

    try {
      response = await barcodeSearch(data);
    } catch (err) {
      console.log(err);
    }
  };

  // const navigationProps = props.navigation.state.params;
  // const discogsResponse = navigationProps.response.data.results[0];

  //console.log(discogsResponse);

  if (isLoading === true) {
    return <Loading loadingText="Loading..." />;
  } else {
    return (
      <View style={styles.container}>
        <Text>Display Screen</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyCover: {
    width: 50,
    height: 50,
  },
  cover: {
    width: 100,
    height: 100,
  },
});

export default displaySearch;
