import React from "react";
import { Text, StyleSheet, View, StatusBar, Platform } from "react-native";
import { Button } from "react-native-elements";

function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome Screen</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate("Login")}
        buttonStyle={styles.LoginButtons}
      />
      <Button
        title="Signup"
        onPress={() => navigation.navigate("Signup")}
        buttonStyle={styles.SignupButtons}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  LoginButtons: {
    width: "80%",
    borderRadius: 25,
    alignSelf: "center",
    marginTop: "10%",
    backgroundColor: "#FF3C0E",
    height: 45,
  },
  SignupButtons: {
    width: "80%",
    borderRadius: 25,
    alignSelf: "center",
    marginTop: "10%",
    backgroundColor: "#FF6541",
    height: 45,
  },
});

export default Welcome;
