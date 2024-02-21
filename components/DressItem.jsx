import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const DressItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.pressableContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: item.image }} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.priceText}>${item.price}</Text>
        </View>
        <Pressable style={styles.addToCartButtonContainer}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </Pressable>
      </Pressable>
    </View>
  )
}

export default DressItem

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  pressableContainer: {
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  priceText: {
    fontSize: 14,
    color: "gray",
  },
  addToCartButtonContainer: {
    backgroundColor: "#088F8F",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  addToCartButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
