import React, { useState, useEffect } from "react";
import { Icon } from "react-native-elements";
import firebase from "firebase";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";
import Loading from "../Screens/Loading";

const AppNavigator = () => {
  useEffect(() => {
    var firebaseConfig = {
      apiKey: "AIzaSyBcqox8TM3iWmjtYGbeZ0ukNsUwWj6-NUI",
      authDomain: "blogapp-f4900.firebaseapp.com",
      databaseURL: "https://blogapp-f4900-default-rtdb.firebaseio.com",
      projectId: "blogapp-f4900",
      storageBucket: "blogapp-f4900.appspot.com",
      messagingSenderId: "1070763638309",
      appId: "1:1070763638309:web:851a4c0ae0a1cfbc5ac9cc",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedin(true);
      } else {
        setLoggedin(false);
      }
    });
  }, []);

  const [loggedin, setLoggedin] = useState(null);

  const renderContent = () => {
    switch (loggedin) {
      case true:
        return <DrawerNavigator />;
        break;
      case false:
        return <AuthNavigator />;
        break;

      default:
        return <Loading />;
        break;
    }
  };
  return <NavigationContainer>{renderContent()}</NavigationContainer>;
};

export default AppNavigator;
