import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  Platform,
  TextInput,
} from "react-native";

import { Button, Icon } from "react-native-elements";

import PageUpperContent from "../Components/PageUpperContent";

function EditBlog({ route }) {
  const item = route.params;
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState("blog");
  const [image, setImage] = useState("upload");
  return (
    <ScrollView style={styles.container}>
      <PageUpperContent
        src={require("../../assets/WriteBlog.jpg")}
        title={"Edit Blog"}
      />
      <View style={{ marginVertical: "5%" }}>
        <View style={styles.titleContent}>
          <TextInput
            placeholder="Title of Blog"
            value={title}
            onChangeText={(e) => setTitle(e)}
            style={{ paddingHorizontal: "5%", fontSize: 18 }}
            multiline={true}
          />
        </View>
        <View style={styles.descriptionContent}>
          <TextInput
            value={description}
            placeholder="Description of Blog"
            onChangeText={(e) => setDescription(e)}
            style={{
              paddingHorizontal: "5%",
              alignSelf: "flex-start",
              paddingTop: "5%",
              fontSize: 18,
            }}
            multiline={true}
          />
        </View>
        <View style={styles.imageContent}>
          <Text style={{ paddingHorizontal: "5%" }}>{image}</Text>
          <Button
            icon={<Icon type="entypo" name="images" />}
            title="Upload"
            type="solid"
            buttonStyle={{
              marginHorizontal: "8%",
            }}
          />
        </View>
        <Button title="Edit" buttonStyle={styles.Buttons} />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "white",
  },
  titleContent: {
    backgroundColor: "rgba(237, 237, 237,50)",
    width: "85%",
    height: 50,
    flexDirection: "row",
    borderRadius: 25,
    alignSelf: "center",
    alignItems: "center",
    marginBottom: "5%",
  },
  descriptionContent: {
    backgroundColor: "rgba(237, 237, 237,50)",
    width: "85%",
    height: 200,
    flexDirection: "row",
    borderRadius: 25,
    alignSelf: "center",
    alignItems: "center",
    marginBottom: "5%",
  },
  imageContent: {
    backgroundColor: "rgba(237, 237, 237,50)",
    width: "85%",
    height: 70,
    flexDirection: "row",
    borderRadius: 25,
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "5%",
  },
  Buttons: {
    width: "50%",
    borderRadius: 25,
    alignSelf: "center",
    marginTop: "10%",
    backgroundColor: "#FF6541",
    height: 45,
    marginBottom: "10%",
  },
});

export default EditBlog;
