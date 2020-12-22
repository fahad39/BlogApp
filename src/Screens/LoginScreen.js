import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import { Button, Avatar } from "react-native-elements";
import firebase from "firebase";

import InputField from "../Components/InputField";
import PageUpperContent from "../Components/PageUpperContent";
import Loading from "./Loading";
function LoginScreen({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [Loading, setLoading] = useState(false);

  const Fields = () => {
    return (
      <View style={{ marginTop: "5%" }}>
        <View>
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
        </View>

        <View style={{ paddingVertical: "5%" }}></View>
        <InputField
          iconName={"email"}
          iconType={"material"}
          placeholder={"Email"}
          onChangeText={(e) => setEmail(e)}
          autoCapitalize={"none"}
        />
        <InputField
          iconName={"lock"}
          iconType={"font-awesome"}
          placeholder={"Password"}
          secureTextEntry={true}
          onChangeText={(e) => setPassword(e)}
        />
      </View>
    );
  };

  onsubmit = () => {
    console.log(Loading);
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(onLoginSuccess());
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  onLoginSuccess = () => {};
  const renderButton = () => {
    return (
      <Button
        title="Login"
        buttonStyle={styles.Buttons}
        onPress={() => {
          setLoading(true), onsubmit();
        }}
        loading={Loading}
      />
    );
  };
  return (
    <View style={styles.container}>
      {Fields()}
      {renderButton()}
      <View style={styles.reg}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={{ color: "#FF3C0E" }}> Click here</Text>
        </TouchableOpacity>
      </View>
      <Text>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  Buttons: {
    width: "80%",
    borderRadius: 25,
    alignSelf: "center",
    marginTop: "10%",
    backgroundColor: "#FF6541",
    height: 45,
  },
  reg: {
    flexDirection: "row",
    paddingTop: "5%",
    justifyContent: "center",
  },
});

export default LoginScreen;
