import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../CartReducer";
import { decrementQty, incrementQty } from "../ProductReducer";

const DressItem = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  
  const addItemToCart = () => {
    dispatch(addToCart(item)); // cart
    dispatch(incrementQty(item)); // product
  };

  return (
    <View>
      <Pressable style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={{ uri: item.image }}
          />
        </View>

        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>

        {cart.some((c) => c.id === item.id) ? (
          <Pressable style={styles.quantityContainer}>
            <Pressable
              onPress={() => {
                dispatch(decrementQuantity(item)); // cart
                dispatch(decrementQty(item)); // product
              }}
              style={styles.quantityButton}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </Pressable>

            <Text style={styles.quantityValue}>{item.quantity}</Text>

            <Pressable
              onPress={() => {
                dispatch(incrementQuantity(item)); // cart
                dispatch(incrementQty(item)); //product
              }}
              style={styles.quantityButton}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </Pressable>
          </Pressable>
        ) : (
          <Pressable onPress={addItemToCart} style={styles.addButton}>
            <Text style={styles.addButtonText}>Add</Text>
          </Pressable>
        )}
      </Pressable>
    </View>
  );
};

export default DressItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 14,
  },
  image: {
    width: 70,
    height: 70,
  },
  name: {
    width: 83,
    fontSize: 17,
    fontWeight: "500",
    marginBottom: 7,
  },
  price: {
    width: 60,
    color: "gray",
    fontSize: 15,
  },
  quantityContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  quantityButton: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderColor: "#BEBEBE",
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignContent: "center",
  },
  quantityButtonText: {
    fontSize: 20,
    color: "#088F8F",
    paddingHorizontal: 6,
    fontWeight: "600",
    textAlign: "center",
  },
  quantityValue: {
    fontSize: 19,
    color: "#088F8F",
    paddingHorizontal: 8,
    fontWeight: "600",
  },
  addButton: {
    width: 80,
    borderColor: "gray",
    borderRadius: 4,
    borderWidth: 0.8,
    marginVertical: 10,
    textAlign: "center",
    padding: 5,
  },
  addButtonText: {
    color: "#088F8F",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },
});
