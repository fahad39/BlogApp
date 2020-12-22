import React from "react";
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  Platform,
  ImageBackground,
} from "react-native";
import { Button, Icon, Avatar } from "react-native-elements";

function Welcome({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.img}
    >
      <View style={styles.container}>
        <Avatar
          size="xlarge"
          rounded
          icon={{ type: "font-awesome-5", name: "blog", color: "#FF3C0E" }}
          containerStyle={{
            backgroundColor: "white",
            alignSelf: "center",
            marginTop: "8%",
          }}
        />

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 24,
            alignSelf: "center",
            paddingTop: "5%",
            color: "white",
          }}
        >
          Welcome Screen
        </Text>
        <View style={{ paddingTop: "50%" }}>
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
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    justifyContent: "center",
  },
  LoginButtons: {
    width: "80%",
    borderRadius: 25,
    alignSelf: "center",
    marginTop: "10%",
    backgroundColor: "#FF3C0E",
    height: 45,
    elevation: 5,
  },
  SignupButtons: {
    width: "80%",
    borderRadius: 25,
    alignSelf: "center",
    marginTop: "10%",
    backgroundColor: "#FF6541",
    height: 45,
  },
  img: {
    flex: 1,
    resizeMode: "cover",
    opacity: 0.7,
  },
});

export default Welcome;
