import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "react-native-elements";

import BlogData from "../Components/BlogData";

function Search({ navigation }) {
  const [search, setSearch] = useState("");

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
  const updateSearch = (search) => {
    setSearch(search);
  };

  const data = (item) => <BlogData items={item} />;

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={(val) => updateSearch(val)}
        lightTheme={true}
        round={true}
        value={search}
        searchIcon={{ size: 32 }}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Search;
