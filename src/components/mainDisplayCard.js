import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { navigate } from "../navigationRef";

function Card(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={{ uri: props.coverImage }}
        style={styles.cardImage}
      ></Image>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.titleStyle}>{props.title}</Text>
          <Text style={styles.subtitleStyle}>
            Genre: {props.genre}, Release Date: {props.year}
          </Text>
        </View>
        <View style={styles.actionBody}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigate("Track", { data: props.releaseId })}
          >
            <Text style={styles.actionText}>Tracklist</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigate("Youtube", { data: props.releaseId })}
          >
            <Text style={styles.actionText}>Youtube Videos</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#c2c2c2",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 8,
    overflow: "hidden",
  },
  cardImage: {
    backgroundColor: "#ccc",
    flex: 1,
    //minHeight: 359,
  },
  cardBody: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.15)",
    left: 0,
    right: 0,
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center",
  },
  titleStyle: {
    fontSize: 24,
    color: "#FFF",
    paddingBottom: 12,
  },
  subtitleStyle: {
    fontSize: 14,
    color: "#FFF",
    lineHeight: 16,
    opacity: 0.5,
  },
  actionBody: {
    padding: 8,
    flexDirection: "row",
  },
  actionButton: {
    padding: 8,
    height: 36,
  },
  actionText: {
    fontSize: 14,
    color: "#FFF",
    opacity: 0.9,
  },
});

export default Card;
