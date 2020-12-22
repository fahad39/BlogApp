import React from "react";
import { Text, StyleSheet, View, Dimensions, Image } from "react-native";

const { width, height } = Dimensions.get("window");

function PageUpperContent({ src, title }) {
  return (
    <View>
      <View>
        <Image source={src} style={styles.imagestyle} />
      </View>
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <Text style={{ fontSize: 50, fontWeight: "bold" }}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imagestyle: {
    resizeMode: "contain",
    // marginTop: StatusBar.length,
    height: height * 0.25,
    width: width,
  },
});

export default PageUpperContent;
