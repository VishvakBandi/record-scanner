import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const displaySearch = (props) => {
  const navigationProps = props.navigation.state.params;
  const discogsResponse = navigationProps.response.data.results[0];

  //console.log(discogsResponse);

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
