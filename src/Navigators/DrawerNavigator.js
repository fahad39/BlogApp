import React from "react";
import { Icon } from "react-native-elements";
import firebase from "firebase";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../Screens/Home";
import ReadBlog from "../Screens/ReadBlog";
import Search from "../Screens/Search";
import Profile from "../Screens/Profile";
import MyBlog from "../Screens/MyBlog";
import PostBlog from "../Screens/PostBlog";
import BlogData from "../Components/BlogData";
import DisplayInfo from "../Components/DisplayInfo";
import AccountScreen from "../Screens/AccountScreen";
import PasswordScreen from "../Screens/PasswordScreen";
import SettingScreen from "../Screens/SettingScreen";
import NotificationScreen from "../Screens/NotificationScreen";
import Favourite from "../Screens/Favourite";
import EditBlog from "../Screens/EditBlog";
import AuthNavigator from "./AuthNavigator";

const HomeStack = createStackNavigator();
const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator mode="modal">
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="ReadBlog"
        component={ReadBlog}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

const SearchStack = createStackNavigator();
const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator initialRouteName="Search">
      <SearchStack.Screen name="Search" component={Search} />
      <SearchStack.Screen
        name="ReadBlog"
        component={ReadBlog}
        options={{ headerShown: false }}
      />
    </SearchStack.Navigator>
  );
};
const AccountStack = createStackNavigator();
const AccountStackNavigator = () => {
  return (
    <AccountStack.Navigator initialRouteName="Account">
      <AccountStack.Screen name="Account" component={AccountScreen} />
      <AccountStack.Screen name="Profile" component={Profile} />
      <AccountStack.Screen name="Password" component={PasswordScreen} />
      <AccountStack.Screen name="Settings" component={SettingScreen} />
      <AccountStack.Screen
        name="Notifications"
        component={NotificationScreen}
      />
    </AccountStack.Navigator>
  );
};

const MyblogStack = createStackNavigator();
const MyblogStackNavigator = () => {
  return (
    <MyblogStack.Navigator>
      <MyblogStack.Screen name="MyBlog" component={MyBlog} />
      <MyblogStack.Screen
        name="EditBlog"
        component={EditBlog}
        options={{ headerShown: false }}
      />
    </MyblogStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeBackgroundColor: "#FF6541",
        activeTintColor: "white",
        inactiveBackgroundColor: "white",
        inactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon
              type={"font-awesome"}
              name={"search"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon type={"entypo"} name={"home"} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon
              type={"ionicon"}
              name={"md-person"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeBackgroundColor: "#FF6541",
        activeTintColor: "white",

        inactiveTintColor: "black",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          drawerIcon: ({ size, color }) => (
            <Icon type={"entypo"} name={"home"} size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="MyBlog"
        component={MyblogStackNavigator}
        options={{
          drawerIcon: ({ size, color }) => (
            <Icon
              type={"font-awesome-5"}
              name={"blog"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="PostBlog"
        component={PostBlog}
        options={{
          drawerIcon: ({ size, color }) => (
            <Icon
              type={"material-community"}
              name={"typewriter"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourite"
        component={Favourite}
        options={{
          drawerIcon: ({ size, color }) => (
            <Icon type={"antdesign"} name={"heart"} size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Account"
        component={AccountStackNavigator}
        options={{
          drawerIcon: ({ size, color }) => (
            <Icon
              type={"ionicon"}
              name={"md-person"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={AuthNavigator}
        options={{
          drawerIcon: ({ size, color }) => (
            <Icon
              type={"material-community"}
              name={"logout"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
