import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";
import { Icon } from "react-native-elements";
import DisplayInfo from "../Components/DisplayInfo";
import firebase from "firebase";

function AccountScreen({ navigation }) {
  const item = {
    name: "Fahad Hussain",
    Email: "huccanefahad07@gmail.com",
    phone: "03234598214",
  };
  return (
    <View style={styles.Container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Avatar.Image
          source={require("../../assets/avatar.jpg")}
          style={styles.avatar}
        />

        <View style={{ paddingLeft: "5%" }}>
          <Text>Fahad Hussain</Text>
          <Text>Huccanefahad07@gmail.com</Text>
        </View>
      </View>
      <View
        style={{
          borderTopWidth: 1,
          marginVertical: "10%",
          borderColor: "rgba(112,112,112,0.3)",
        }}
      >
        <DisplayInfo
          Icontype="materialicon"
          IconName="person"
          text="Account"
          onPress={() => navigation.navigate("Profile", item)}
        />
        <DisplayInfo
          Icontype="entypo"
          IconName="lock"
          text="Password"
          onPress={() => navigation.navigate("Password")}
        />
        <DisplayInfo
          Icontype="ionicon"
          IconName="md-settings"
          text="Settings"
          onPress={() => navigation.navigate("Settings")}
        />
        <DisplayInfo
          Icontype="ionicon"
          IconName="md-notifications"
          text="Notifications"
          onPress={() => navigation.navigate("Notifications")}
        />
        <DisplayInfo
          Icontype="material-community"
          IconName="logout"
          text="Logout"
          onPress={() => firebase.auth().signOut()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "white",
  },
  avatar: {
    marginTop: "5%",
  },
});

export default AccountScreen;
