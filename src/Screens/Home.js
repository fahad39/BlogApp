import React from "react";
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  Platform,
  Button,
} from "react-native";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button
        title="read blog"
        onPress={() => navigation.navigate("ReadBlog")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Home;
