import React from "react";
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  Platform,
  ScrollView,
  Image,
} from "react-native";

import { Icon } from "react-native-elements";

function ReadBlog() {
  return (
    <ScrollView style={styles.container}>
      <Image source={require("../../assets/example.jpg")} style={styles.img} />
      <View style={styles.titleContent}>
        <Text style={styles.title}>Build a Creative mind</Text>
        <View style={styles.fav}>
          <Icon type={"antdesign"} name={"heart"} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  img: {
    borderRadius: 25,
    alignSelf: "center",
    marginTop: "2%",
  },
  titleContent: {
    borderBottomWidth: 1,
    width: "82%",
    alignSelf: "center",
    flexDirection: "row",
  },
  title: {
    flex: 1.5,
  },
  fav: {
    flex: 0.5,
    backgroundColor: "#FF3C0E",
    height: 50,
    width: 40,
    justifyContent: "center",
    borderRadius: 25,
    marginTop: "2%",
  },
});

export default ReadBlog;
