import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import Loading from "../components/loadingScreen";
import Card from "../components/mainDisplayCard";

import { Context as DiscogsContext } from "../context/discogsContext";
import { navigate } from "../navigationRef";

const displaySearch = (props) => {
  const barcodeNum = props.navigation.state.params.data;
  let albumImage;

  const [isLoading, setIsLoading] = useState(true);
  const [barcodeCall, setBarcodeCall] = useState(false);
  const [albumIdCall, setAlbumIdCall] = useState(false);

  const { state, barcodeSearch, releaseIdSearch } = useContext(DiscogsContext);

  useEffect(() => {
    (async () => {
      if (barcodeCall === false) {
        await barcodeSearch(barcodeNum);

        setBarcodeCall(true);
      }

      if (barcodeCall === true && albumIdCall === false) {
        try {
          await AsyncStorage.setItem(
            "albumImage",
            state.data.results[0].cover_image
          );
          await releaseIdSearch(state.data.results[0].id);
        } catch (err) {
          console.log(err);
        }

        setAlbumIdCall(true);
        setIsLoading(false);
      }

      if (albumIdCall === true) {
        albumImage = await AsyncStorage.getItem("albumImage");
        console.log(albumImage);
      }
    })();
  }, [state]);

  if (isLoading === true) {
    return <Loading loadingText="Loading..." />;
  } else {
    return (
      <View style={styles.container}>
        <Card
          style={styles.cover}
          coverImage={albumImage}
          title={state.data.title}
          year={state.data.released}
          genre={state.data.artists[0].name}
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
