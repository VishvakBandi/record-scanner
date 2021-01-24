import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import Loading from "../components/loadingScreen";
import Card from "../components/mainDisplayCard";

import { Context as DiscogsContext } from "../context/discogsContext";
import { navigate } from "../navigationRef";

const displaySearch = (props) => {
  const barcodeNum = props.navigation.state.params.data;
  let discogsResponse;
  let releaseId;

  const [isLoading, setIsLoading] = useState(true);
  const [barcodeCall, setBarcodeCall] = useState(false);

  const { state, barcodeSearch, releaseIdSearch } = useContext(DiscogsContext);

  useEffect(() => {
    (async () => {
      if (barcodeCall === false) {
        await barcodeSearch(barcodeNum);

        setBarcodeCall(true);
      }
    })();
  }, [barcodeNum]);

  useEffect(() => {
    (async () => {
      if (barcodeCall === true) {
        discogsResponse = state.data.results[0];
        releaseId = discogsResponse.id;

        await releaseIdSearch(barcodeNum);
        setIsLoading(false);
      }
    })();
  }, [state, barcodeCall]);

  if (isLoading === true) {
    //console.log(state);
    //console.log(barcodeCall);
    return <Loading loadingText="Loading..." />;
  } else {
    console.log(discogsResponse);

    return (
      <View style={styles.container}>
        <Card
          style={styles.cover}
          coverImage={discogsResponse.cover_image}
          title={discogsResponse.title}
          year={discogsResponse.year}
          genre={discogsResponse.genre}
          releaseId={releaseId}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
  },
  cover: {
    width: "100%",
    height: "50%",
  },
});

export default displaySearch;
