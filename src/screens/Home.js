import React from 'react';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Text>Use the bottom tab to get to the camera screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default Home;
