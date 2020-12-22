import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Switch } from "react-native-paper";
import { Icon } from "react-native-elements";

function NotificationScreen() {
  const [isEmailOn, setIsEmailOn] = useState(false);
  const [isSmsOn, setIsSmsOn] = useState(false);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          marginVertical: "5%",
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Notifications</Text>
      </View>
      <View>
        <View style={styles.titleContent}>
          <Icon
            type="material"
            name="email"
            style={{ paddingHorizontal: "5%" }}
          />

          <Text> Email Notifications</Text>
          <Switch
            value={isEmailOn}
            onValueChange={() => setIsEmailOn(!isEmailOn)}
            color="#FF6541"
            style={styles.switch}
          />
        </View>
        <View style={styles.titleContent}>
          <Icon
            type="material"
            name="sms"
            style={{ paddingHorizontal: "5%" }}
          />

          <Text> Sms Notifications</Text>
          <Switch
            value={isSmsOn}
            onValueChange={() => setIsSmsOn(!isSmsOn)}
            color="#FF6541"
            style={styles.switch}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  titleContent: {
    height: 50,
    flexDirection: "row",
    marginVertical: "5%",
    borderBottomWidth: 1,
    alignItems: "center",
    borderBottomColor: "rgba(112,112,112,0.3)",
  },
  switch: {
    paddingLeft: "30%",
  },
});

export default NotificationScreen;
