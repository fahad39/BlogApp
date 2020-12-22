import { useCallback } from "react";
import firebase from "../../Database/firebase";

export function getBlog() {
  return (dispatch) => {
    firebase
      .database()
      .ref("/blogs")
      .on("value", (snapshot) => {
        dispatch({ type: "BLOG_FETCH", payload: snapshot.val() });
      });
  };
}
