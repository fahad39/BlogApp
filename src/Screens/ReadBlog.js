import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  Platform,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import { Icon } from "react-native-elements";
import { Avatar } from "react-native-paper";

const blogImg = (image) => <Image source={image} style={styles.img} />;

function ReadBlog({ route }) {
  const blog = route.params;
  const [favourite, setFav] = useState(blog.fav);

  return (
    <ScrollView style={styles.container}>
      {blogImg(blog.image)}
      <View style={styles.infoContent}>
        <Text style={styles.title}>{blog.title}</Text>

        <TouchableOpacity onPress={() => setFav(!favourite)}>
          <Avatar.Icon
            icon="heart"
            color={favourite ? "#FF6541" : "white"}
            style={favourite ? styles.fav2 : styles.fav}
            size={50}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.infoContent}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar.Image size={40} source={require("../../assets/avatar.jpg")} />
          <Text style={{ paddingLeft: "5%", fontSize: 18 }}>{blog.author}</Text>
        </View>
      </View>
      <View style={styles.blog}>
        <Text style={{ fontSize: 16 }}>
          Now it seems that Apple has renewed its focus on building an actual
          vehicle — though there’s a lot of uncertainty on when (and even if) it
          will happen. Reuters says 2024 is the production goal for an
          Apple-made passenger vehicle, though it could be pushed back “into
          2025 or beyond” because of pandemic-related delays. There is also
          still a chance Apple could scale its efforts back to just autonomous
          driving tech, the report warns. Apple declined to comment. If Apple is
          planning to manufacture a self-driving car, it may also face
          regulatory hurdles before it can hit the road. There are no true
          self-driving vehicles available today, though some cars, like those
          from Tesla, offer a degree of advanced driver assistance driving in
          certain situations. Earlier this month, Apple handed control of its
          self-driving car project over to John Giannandrea, the company’s head
          of AI. Giannandrea was brought on board in 2018 to work on Siri, after
          previously working at Google as head of search and artificial
          intelligence. Just yesterday, another report, from the Economic Daily
          News in Taiwan, said that an Apple-made car could be released as soon
          as 2021 in what would be a stunningly ambitious timeframe if true.
          Back in 2018, reliable Apple analyst Ming-Chi Kuo predicted the launch
          of a car between 2023 and 2025, according to MacRumors. Generally,
          though, the impression has been that Apple was focused on self-driving
          technology for the past several years, rather than production of an
          actual Apple-branded vehicle.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "white",
  },
  img: {
    borderRadius: 25,
    alignSelf: "center",
    marginTop: "2%",
    width: "90%",
  },
  infoContent: {
    borderBottomWidth: 1,
    width: "82%",
    alignSelf: "center",
    flexDirection: "row",
    paddingVertical: "5%",
    borderColor: "rgba(112,112,112,0.3)",
  },
  title: {
    flex: 1.5,
    fontWeight: "bold",
    fontSize: 20,
  },
  fav: {
    backgroundColor: "#FF6541",

    marginTop: "2%",
  },
  fav2: {
    backgroundColor: "#FFEFEC",

    marginTop: "2%",
  },
  blog: {
    width: "82%",
    alignSelf: "center",

    paddingVertical: "10%",
  },
});

export default ReadBlog;
