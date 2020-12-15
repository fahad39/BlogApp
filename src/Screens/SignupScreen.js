import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";

import InputField from "../Components/InputField";

const Fields = () => {
  return (
    <View>
      <InputField
        iconName={"person"}
        iconType={"material"}
        placeholder={"Name"}
      />
      <InputField
        iconName={"email"}
        iconType={"material"}
        placeholder={"Email"}
      />
      <InputField
        iconName={"lock"}
        iconType={"font-awesome"}
        placeholder={"Password"}
        secureTextEntry={true}
      />
      <InputField
        iconName={"lock"}
        iconType={"font-awesome"}
        placeholder={"Confirm Password"}
        secureTextEntry={true}
      />
    </View>
  );
};

const renderButton = () => {
  return <Button title="Register" buttonStyle={styles.Buttons} />;
};

function SignupScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {Fields()}
      {renderButton()}
      <View style={styles.reg}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "#FF3C0E" }}> Login here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
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

export default SignupScreen;