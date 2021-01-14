import React, { useState, useContext, useEffect } from "react";
import { render } from "react-dom";
import { Text, View, StyleSheet, Image } from "react-native";

import Loading from "./loadingScreen";

import { Context as DiscogsContext } from "../context/discogsContext";

const displaySearch = (props) => {
  const barcodeNum = props.navigation.state.params.data;

  const [isLoading, setIsLoading] = useState(true);

  const { state, barcodeSearch, masterIdSearch } = useContext(DiscogsContext);

  useEffect(() => {
    (async () => {
      await barcodeSearch(barcodeNum);
      console.log(state);
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

    /* try {
      const masterId = discogsResponse.master_id;
      (async () => {
        await masterIdSearch(masterId);

        console.log(state);
      })();
    } catch (err) {
      console.log(err);
    } */

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
  materialSpinner: {
    width: 50,
    height: 50,
    alignSelf: "center",
  },
});

export default displaySearch;
