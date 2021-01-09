import React from "react";
import { render } from "react-dom";
import { ActivityIndicator, Text, View } from "react-native";

const LoadingScreen = () => {
    render() {
        return (
            <View>
                <ActivityIndicator
                    animating={true}
                    color="white"
                    size="large"
                    style={{margin: 15}}
                />

                <Text>
                    {this.props.loadingText}
                </Text>
            </View>
        )
    }
}

export default LoadingScreen;