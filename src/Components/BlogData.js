import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

function BlogData({ image, title, author, authorpic, fav, OnPress }) {
  return (
    <TouchableWithoutFeedback onPress={OnPress}>
      <Card style={styles.card}>
        <Card.Cover source={image}></Card.Cover>
        <Card.Content>
          <Card.Title title={title} subtitle={author} />
        </Card.Content>
      </Card>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    alignSelf: "center",
    marginVertical: "5%",
    borderRadius: 10,
    elevation: 3,
  },
});

export default BlogData;
