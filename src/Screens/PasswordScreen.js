import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

import InputField from "../Components/InputField";

function PasswordScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          marginVertical: "5%",
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Change Password
        </Text>
      </View>
      <View>
        <InputField
          iconName={"lock"}
          iconType={"font-awesome"}
          placeholder={"Old Password"}
          secureTextEntry={true}
        />
        <InputField
          iconName={"lock"}
          iconType={"font-awesome"}
          placeholder={"New Password"}
          secureTextEntry={true}
        />
        <InputField
          iconName={"lock"}
          iconType={"font-awesome"}
          placeholder={"Confirm Password"}
          secureTextEntry={true}
        />
      </View>
      <Button title="Change Password" buttonStyle={styles.Buttons} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  Buttons: {
    width: "50%",
    borderRadius: 25,
    alignSelf: "center",
    marginTop: "10%",
    backgroundColor: "#FF6541",
    height: 45,
    marginBottom: "10%",
  },
});

export default PasswordScreen;
