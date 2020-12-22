import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Button, Avatar } from "react-native-elements";
import firebase from "firebase";

import InputField from "../Components/InputField";
import PageUpperContent from "../Components/PageUpperContent";

function SignupScreen({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [enableShift, SetEnableShift] = useState(false);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  onsubmit = () => {
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
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
        title="Register"
        buttonStyle={styles.Buttons}
        loading={loading}
        onPress={() => {
          setLoading(true), onsubmit();
        }}
      />
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="position"
      enabled={enableShift}
    >
      <View style={{ alignSelf: "center", justifyContent: "center" }}>
        <Avatar
          size="xlarge"
          rounded
          icon={{ type: "font-awesome-5", name: "blog", color: "#FF3C0E" }}
          containerStyle={{
            backgroundColor: "white",
            alignSelf: "center",
            marginTop: "4%",
          }}
        />
        <Text style={{ fontSize: 50, fontWeight: "bold" }}>Signup</Text>
      </View>

      <View style={{ paddingVertical: "5%" }}></View>
      <View>
        <InputField
          iconName={"person"}
          iconType={"material"}
          placeholder={"Name"}
          onChangeText={(e) => setName(e)}
        />
        <InputField
          iconName={"email"}
          iconType={"material"}
          placeholder={"Email"}
          onChangeText={(e) => setEmail(e)}
        />
        <InputField
          iconName={"lock"}
          iconType={"font-awesome"}
          placeholder={"Password"}
          secureTextEntry={true}
          onFocus={() => SetEnableShift(true)}
          onChangeText={(e) => setPassword(e)}
        />
        <InputField
          iconName={"lock"}
          iconType={"font-awesome"}
          placeholder={"Confirm Password"}
          secureTextEntry={true}
          onFocus={() => SetEnableShift(true)}
        />
      </View>
      {renderButton()}
      <View style={styles.reg}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "#FF3C0E" }}> Login here</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "white",
  },
  Buttons: {
    width: "80%",
    borderRadius: 25,
    alignSelf: "center",
    marginTop: "5%",
    backgroundColor: "#FF6541",
    height: 45,
  },
  reg: {
    flexDirection: "row",
    paddingTop: "5%",
    justifyContent: "center",
  },
});

export default SignupScreen;
