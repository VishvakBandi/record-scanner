import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import Loading from "../components/loadingScreen";
import Card from "../components/card";

import { Context as DiscogsContext } from "../context/discogsContext";

const displaySearch = (props) => {
  const barcodeNum = props.navigation.state.params.data;
  let discogsResponse = null;
  let masterId = null;

  const [isLoading, setIsLoading] = useState(true);

  const { state, barcodeSearch, masterIdSearch } = useContext(DiscogsContext);

  useEffect(() => {
    (async () => {
      await barcodeSearch(barcodeNum);
      //console.log(state);
      //setIsLoading(false);
      //await state;

      //console.log(state);
    })();
  }, [barcodeNum]);

  useEffect(() => {
    (async () => {
      if (state.data !== undefined) {
        discogsResponse = state.data.results[0];
        masterId = discogsResponse.master_id;

        setIsLoading(false);
      }
    })();
  }, [state]);

  // const navigationProps = props.navigation.state.params;
  // const discogsResponse = navigationProps.response.data.results[0];

  //console.log(discogsResponse);

  if (isLoading === true) {
    return <Loading loadingText="Loading..." />;
  } else {
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
        <Card
          style={styles.cover}
          coverImage={discogsResponse.cover_image}
          title={discogsResponse.title}
          year={discogsResponse.year}
          genre={discogsResponse.genre}
        />
      </View>

      /*<View style={styles.container}>
      <Text>Display Screen</Text>
      <Image
        style={styles.cover}
        source={{ uri: discogsResponse.cover_image }}
      />
      <Text>
        Scanned record - {discogsResponse.title}, released in the year
        {discogsResponse.year}, under the label {discogsResponse.label[0]}
      </Text>
    </View>; */
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
