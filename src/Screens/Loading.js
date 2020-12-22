import React from "react";
import { View, StyleSheet } from "react-native";
import { BarIndicator } from "react-native-indicators";

function Loading() {
  return (
    <View style={styles.container}>
      <BarIndicator
        color={"#FF3C0E"}
        count={4}
        size={40}
        animationDuration={1500}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loading;
