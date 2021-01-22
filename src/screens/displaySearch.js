import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import Loading from "../components/loadingScreen";
import Card from "../components/mainDisplayCard";

import { Context as DiscogsContext } from "../context/discogsContext";
import { navigate } from "../navigationRef";

const displaySearch = (props) => {
  const barcodeNum = props.navigation.state.params.data;

  const [isLoading, setIsLoading] = useState(true);

  const { state, barcodeSearch } = useContext(DiscogsContext);

  useEffect(() => {
    (async () => {
      let mounted = true;

      if (mounted) {
        await barcodeSearch(barcodeNum);

        setIsLoading(false);
      }
      return () => (mounted = false);
    })();
  }, [barcodeNum]);

  if (isLoading === true || state.data.results[0] === undefined) {
    return <Loading loadingText="Loading..." />;
  } else {
    const discogsResponse = state.data.results[0];
    const releaseId = discogsResponse.id;

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
