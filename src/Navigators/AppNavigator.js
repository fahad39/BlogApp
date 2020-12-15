import React from "react";
import { Icon } from "react-native-elements";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../Screens/Home";
import ReadBlog from "../Screens/ReadBlog";
import Search from "../Screens/Search";
import Profile from "../Screens/Profile";
import MyBlog from "../Screens/MyBlog";
import PostBlog from "../Screens/PostBlog";
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
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={Search} />
    </SearchStack.Navigator>
  );
};

const AccountStack = createStackNavigator();
const AccountStackNavigator = () => {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="Profile" component={Profile} />
    </AccountStack.Navigator>
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
        inactiveBackgroundColor: "#eee",
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
            <Icon
              type={"material-community"}
              name={"plus-circle"}
              size={size}
              color={color}
            />
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
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="MyBlog" component={MyBlog} />
      <Drawer.Screen name="PostBlog" component={PostBlog} />
      <Drawer.Screen name="Account" component={AccountStackNavigator} />
    </Drawer.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
