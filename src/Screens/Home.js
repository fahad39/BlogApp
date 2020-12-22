import React from "react";
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  Platform,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

import { Avatar } from "react-native-paper";
import BlogData from "../Components/BlogData";

function Home({ navigation }) {
  const example = [
    {
      id: 1,
      image: require("../../assets/example.jpg"),
      title: "Microsoft and Google join Facebook’s",
      author: "Jon Porter",
      authorpic: "../../assets/example.jpg",
      fav: true,
    },
    {
      id: 2,
      image: require("../../assets/blackpanther.jpg"),
      title: "Black Panther is now available in Fortnite",
      author: "Jay Peters",
      authorpic: "../../assets/example.jpg",
      fav: false,
    },
    {
      id: 3,
      image: require("../../assets/apple.jpeg"),
      title: "Apple wants to build its first car",
      author: "Jacob",
      authorpic: "../../assets/example.jpg",
      fav: true,
    },
    {
      id: 4,
      image: require("../../assets/samsungs.jpg"),
      title: "Samsung’s leaked Galaxy Chromebook 2",
      author: "Chaim",
      authorpic: "../../assets/example.jpg",
      fav: false,
    },
    {
      id: 5,
      image: require("../../assets/example.jpg"),
      title: "Build a Dumb Mind",
      author: "Author name",
      authorpic: "../../assets/example.jpg",
      fav: true,
    },
    {
      id: 6,
      image: require("../../assets/example.jpg"),
      title: "Build a Dumb Mind",
      author: "Author name",
      authorpic: "../../assets/example.jpg",
      fav: false,
    },
    {
      id: 7,
      image: require("../../assets/example.jpg"),
      title: "Build a Dumb Mind",
      author: "Author name",
      authorpic: "../../assets/example.jpg",
      fav: false,
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <Avatar.Image
        source={require("../../assets/avatar.jpg")}
        style={styles.avatar}
      />
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <Text style={{ fontSize: 50, fontWeight: "bold", color: "#FF3C0E" }}>
          Blog
        </Text>
        <Text style={{ fontSize: 50, fontWeight: "bold", color: "#FF6541" }}>
          App
        </Text>
      </View>

      <FlatList
        data={example}
        renderItem={({ item }) => (
          <BlogData
            image={item.image}
            title={item.title}
            author={item.author}
            authorpic={item.authorpic}
            fav={item.fav}
            OnPress={() => navigation.navigate("ReadBlog", item)}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  avatar: {
    alignSelf: "flex-end",
    marginTop: "5%",
    marginRight: "5%",
  },
});

export default Home;
