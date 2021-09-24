import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import styles from "./styles";

const PostDetail = ({ post }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
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
        <Text style={styles.longDescription}>{post.description}</Text>
      </View>
    </ScrollView>
  );
};

export default PostDetail;
