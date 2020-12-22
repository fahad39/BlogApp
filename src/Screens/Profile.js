import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import { Avatar } from "react-native-paper";
import { Icon, Button } from "react-native-elements";
import DisplayInfo from "../Components/DisplayInfo";

function Profile({ route }) {
  let item = route.params;
  const [name, setName] = useState(item.name);
  const [email, setEmail] = useState(item.Email);
  const [phone, setPhone] = useState(item.phone);
  const [enableShift, setEnableShift] = useState(false);
  return (
    <ScrollView style={styles.Container}>
      <View
        style={{
          marginTop: "5%",
          alignSelf: "center",

          alignItems: "center",
        }}
      >
        <Avatar.Image
          source={require("../../assets/avatar.jpg")}
          style={styles.avatar}
          size={80}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: "12%",
          }}
        >
          <Button
            icon={<Icon type="entypo" name="images" />}
            title="Upload"
            type="solid"
            buttonStyle={{ width: "70%" }}
          />
          <Button
            icon={<Icon type="entypo" name="camera" />}
            title="Take Pic"
            type="solid"
            buttonStyle={{ width: "70%" }}
          />
        </View>
      </View>
      <View>
        <View style={styles.titleContent}>
          <Icon type="material" name="person" style={{ paddingLeft: "5%" }} />
          <TextInput
            placeholder="Full Name"
            value={name}
            onChangeText={(e) => setName(e)}
            style={{ paddingHorizontal: "5%", fontSize: 18 }}
          />
        </View>
        <View style={styles.titleContent}>
          <Icon type="material" name="email" style={{ paddingLeft: "5%" }} />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(e) => setEmail(e)}
            style={{ paddingHorizontal: "5%", fontSize: 18 }}
          />
        </View>
        <View style={styles.titleContent}>
          <Icon type="entypo" name="phone" style={{ paddingLeft: "5%" }} />
          <TextInput
            placeholder="Phone Number"
            value={phone}
            onChangeText={(e) => setPhone(e)}
            style={{ paddingHorizontal: "5%", fontSize: 18 }}
            onFocus={() => setEnableShift(true)}
          />
        </View>
      </View>
      <Button title="Save Changes" buttonStyle={styles.Buttons} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "white",
  },
  avatar: {
    marginVertical: "5%",
    alignSelf: "center",
  },
  titleContent: {
    height: 50,
    flexDirection: "row",
    marginVertical: "5%",
    borderBottomWidth: 1,
    alignItems: "center",
    borderBottomColor: "rgba(112,112,112,0.3)",
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

export default Profile;
