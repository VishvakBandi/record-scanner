import React, { useState, useContext, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import Loading from "../components/loadingScreen";

import { Context as DiscogsContext } from "../context/discogsContext";

const trackScreen = (props) => {
  const releaseId = props.navigation.state.params.data;
  console.log(releaseId);

  const [isLoading, setIsLoading] = useState(false);

  const { state, releaseIdSearch } = useContext(DiscogsContext);

  /* useEffect(() => {
    (async () => {
      let mounted = true;

      if (mounted) {
        await releaseIdSearch(releaseId);

        setIsLoading(false);
      }
      return () => (mounted = false);
    })();
  }, [releaseId]); */

  if (isLoading === true || state.data === undefined) {
    return <Loading loadingText="Loading..." />;
  } else {
    //console.log(state);
    return (
      <View style={styles.container}>
        <Text>track Screen</Text>
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
});

export default trackScreen;
