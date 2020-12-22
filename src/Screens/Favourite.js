import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
} from "react-native";

import BlogData from "../Components/BlogData";
import PageUpperContent from "../Components/PageUpperContent";

const { width, height } = Dimensions.get("window");

function Favourite() {
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
      image: require("../../assets/apple.jpeg"),
      title: "Apple wants to build its first car",
      author: "Jacob",
      authorpic: "../../assets/example.jpg",
      fav: true,
    },

    {
      id: 3,
      image: require("../../assets/example.jpg"),
      title: "Build a Dumb Mind",
      author: "Author name",
      authorpic: "../../assets/example.jpg",
      fav: true,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <PageUpperContent
        src={require("../../assets/MyBlog.jpg")}
        title={"Favourites"}
      />

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
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "white",
  },
});

export default Favourite;
