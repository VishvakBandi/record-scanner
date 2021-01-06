import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const displaySearch = (props) => {
  const navigationProps = props.navigation.state.params;

  //console.log(discogsResponse);

  if (navigationProps.response === undefined) {
    const discogsResponse = navigationProps.response.data.results[0];
    displayScanned(discogsResponse);
  } else {
    displayUnscanned();
  }
};

const displayScanned = (data) => {
  return (
    <View style={styles.container}>
      <Text>Display Screen</Text>
      <Image style={styles.cover} source={{ uri: data.cover_image }} />
      <Text>
        Scanned record - {data.title}, released in the year
        {data.year}, under the label {data.label[0]}
      </Text>
    </View>
  );
};

const displayUnscanned = () => {
  return <Text>Go to the scanner screen first</Text>;
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
    width: 66,
    height: 58,
  },
});

export default displaySearch;
