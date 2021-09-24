import React from "react";
import { Text, View } from "react-native";

import PostDetail from "../../components/PostDetail";
import styles from "./styles";
import feed from "../../../assets/data/feed";
import { useRoute } from "@react-navigation/core";

const PostScreen = ({ postId }) => {
  const route = useRoute();
  const post = feed.find((place) => place.id === route.params.postId);

  return (
    <View style={styles.container}>
      <PostDetail post={post} />
    </View>
  );
};

export default PostScreen;
