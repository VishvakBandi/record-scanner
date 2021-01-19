import React, { useState, useContext, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import Loading from "../components/loadingScreen";

import { Context as DiscogsContext } from "../context/discogsContext";

const trackScreen = (props) => {
  const releaseId = props.navigation.state.params.data;
  console.log(releaseId);

  const [isLoading, setIsLoading] = useState(true);

  const { state, releaseIdSearch } = useContext(DiscogsContext);

  useEffect(() => {
    (async () => {
      await releaseIdSearch(releaseId);

      setIsLoading(false);
    })();
  }, [releaseId]);

  if (isLoading === true) {
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
