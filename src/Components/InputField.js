import React from "react";
import {
  TextInput,
  View,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { Icon } from "react-native-elements";

const InputField = (props) => {
  let Inputprops = { ...props };
  delete Inputprops.iconName,
    Inputprops.iconType,
    Inputprops.iconSize,
    Inputprops.iconColor;
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <Icon
        type={props.iconType}
        name={props.iconName}
        style={styles.iconStyle}
        size={20}
        color={props.iconColor}
      />
      <TextInput {...Inputprops} style={styles.textStyle} blurOnSubmit={true} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "85%",
    height: 50,
    flexDirection: "row",
    borderRadius: 25,
    alignSelf: "center",
    alignItems: "center",
    marginBottom: "5%",
  },
  iconStyle: {
    paddingLeft: "8%",
    resizeMode: "contain",
  },
  textStyle: {
    width: "100%",
    height: "100%",
  },
});

export default InputField;
