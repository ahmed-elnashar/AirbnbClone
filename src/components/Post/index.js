import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Image, Pressable } from "react-native";

import styles from "./styles";

const Post = ({ post }) => {
  const navigation = useNavigation();
  const goToPostDetail = () => {
    navigation.navigate("PostDetail", { postId: post.id });
  };

  return (
    <Pressable onPress={goToPostDetail} style={styles.container}>
      <Image
        source={{
          uri: post.imageUrl,
        }}
        style={styles.image}
      />
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>

      <Text style={styles.description} numberOfLines={2}>
        {post.type}, {post.title}
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.newPrice}> ${post.newPrice}</Text> / night
      </Text>

      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </Pressable>
  );
};

export default Post;
