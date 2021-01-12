import React, { useState, useContext, useEffect } from "react";
import { render } from "react-dom";
import { Text, View, StyleSheet, Image } from "react-native";

import Loading from "./loadingScreen";

import { Context as DiscogsContext } from "../context/discogsContext";

const displaySearch = (props) => {
  const barcodeNum = props.navigation.state.params.data;

  const [isLoading, setIsLoading] = useState(true);

  const { state, barcodeSearch } = useContext(DiscogsContext);

  useEffect(() => {
    (async () => {
      await barcodeSearch(barcodeNum);

      setIsLoading(false);
    })();
  }, [barcodeNum]);

  // const navigationProps = props.navigation.state.params;
  // const discogsResponse = navigationProps.response.data.results[0];

  //console.log(discogsResponse);

  if (isLoading === true) {
    return <Loading loadingText="Loading..." />;
  } else {
    const discogsResponse = state.data.results[0];

    return (
      <View style={styles.container}>
        <Text>Display Screen</Text>
        <Image
          style={styles.cover}
          source={{ uri: discogsResponse.cover_image }}
        />
        <Text>
          Scanned record - {discogsResponse.title}, released in the year
          {discogsResponse.year}, under the label {discogsResponse.label[0]}
        </Text>
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
