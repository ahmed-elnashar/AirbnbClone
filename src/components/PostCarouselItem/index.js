import React from "react";
import { View, Text, Image, useWindowDimensions } from "react-native";

import styles from "./styles";

const PostCarouselItem = ({ post }) => {
  const width = useWindowDimensions().width;

  return (
    <View style={[styles.container, { width: width - 60 }]}>
      <View style={styles.innerContainer}>
        <Image
          source={{
            uri: post.imageUrl,
          }}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.bedrooms}>
            {post.bed} bed {post.bedroom} bedroom
          </Text>

          <Text style={styles.description} numberOfLines={2}>
            {post.type}, {post.title}
          </Text>

          <Text style={styles.prices}>
            <Text style={styles.newPrice}> ${post.newPrice}</Text> / night
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PostCarouselItem;
