import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import discogsAPI from "../API/discogs";
import { config } from "../../config";

const ScannerScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);

    getDataWithBarcode(data);
    console.log("scanned");
  };

  async function getDataWithBarcode(data) {
    try {
      // API call with literal definitions for everything
      // const SIG = `&key=${config.key}&secret=${config.secret}`;
      // console.log(SIG);
      // const requestURL = `https://api.discogs.com/database/search?barcode=${data}${SIG}`;

      // const response = await axios.get(requestURL);

      // call the Discogs API
      // returns config data, the API response, headers, bunch of other data
      const response = await discogsAPI.get("database/search", {
        params: {
          barcode: data,
          key: config.key,
          secret: config.secret,
        },
      });

      console.log(response.data.results[0].title);
    } catch (err) {
      console.log(err);
    }
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
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
});

export default ScannerScreen;
