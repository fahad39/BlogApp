import React from "react";
import { Text, StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { Icon } from "react-native-elements";

function DisplayInfo({ Icontype, IconName, text, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          flexDirection: "row",
          paddingLeft: "5%",
          alignItems: "center",
          paddingTop: "8%",
        }}
      >
        <Icon type={Icontype} name={IconName} size={24} />
        <Text style={{ paddingLeft: "5%", fontSize: 16 }}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({});

export default DisplayInfo;
