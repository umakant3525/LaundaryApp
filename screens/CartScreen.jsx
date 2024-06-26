import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { decrementQuantity, incrementQuantity } from "../CartReducer";
import { decrementQty, incrementQty } from "../ProductReducer";

const CartScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);

  return (
    <ScrollView style={{ marginTop: 30 }}>
      {total === 0 ? (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ marginTop: 40 }}>Your cart is empty</Text>
        </View>
      ) : (
        <>
          <View
            style={{
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              onPress={() => navigation.goBack()}
              name="arrow-back"
              size={24}
              color="black"
            />
            <Text>Your Bucket</Text>
          </View>

          <Pressable
            style={{
              backgroundColor: "white",
              borderRadius: 12,
              marginLeft: 10,
              marginRight: 10,
              padding: 14,
            }}
          >
            {cart.map((item, index) => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginVertical: 12,
                }}
                key={index}
              >
                <Text style={{ width: 100, fontSize: 16, fontWeight: "500" }}>
                  {item.name}
                </Text>

                <Pressable
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    alignItems: "center",
                    borderColor: "#BEBEBE",
                    borderWidth: 0.5,
                    borderRadius: 10,
                  }}
                >
                  <Pressable
                    onPress={() => {
                      dispatch(decrementQuantity(item));
                      dispatch(decrementQty(item));
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#088F8F",
                        paddingHorizontal: 6,
                        fontWeight: "600",
                      }}
                    >
                      -
                    </Text>
                  </Pressable>

                  <Pressable>
                    <Text
                      style={{
                        fontSize: 19,
                        color: "#088F8F",
                        paddingHorizontal: 8,
                        fontWeight: "600",
                      }}
                    >
                      {item.quantity}
                    </Text>
                  </Pressable>

                  <Pressable
                    onPress={() => {
                      dispatch(incrementQuantity(item));
                      dispatch(incrementQty(item));
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#088F8F",
                        paddingHorizontal: 6,
                        fontWeight: "600",
                      }}
                    >
                      +
                    </Text>
                  </Pressable>
                </Pressable>

                <Text style={{ fontSize: 16, fontWeight: "500" }}>
                  {item.price * item.quantity} RS
                </Text>
              </View>
            ))}
          </Pressable>

          <View style={{ marginHorizontal: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 30 }}>
              Billing Details
            </Text>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 7,
                padding: 10,
                marginTop: 15,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "400", color: "gray" }}
                >
                  Item Total
                </Text>
                <Text style={{ fontSize: 18, fontWeight: "400" }}>
                  ₹{total}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginVertical: 8,
                }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "400", color: "gray" }}
                >
                  Delivery Fee | 1.2KM
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "400",
                    color: "#088F8F",
                  }}
                >
                  FREE
                </Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                >
                  Free Delivery on Your order
                </Text>
              </View>

              <View
                style={{
                  borderColor: "gray",
                  height: 1,
                  borderWidth: 0.5,
                  marginTop: 10,
                }}
              />

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginVertical: 10,
                }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                >
                  Selected Date
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "400",
                    color: "#088F8F",
                  }}
                >
                  {route.params?.pickUpDate.toDateString()}{" "}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                >
                  No Of Days
                </Text>

                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "400",
                    color: "#088F8F",
                  }}
                >
                  {route.params?.no_Of_days}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginVertical: 10,
                }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                >
                  Selected Pick Up Time
                </Text>

                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "400",
                    color: "#088F8F",
                  }}
                >
                  {route.params?.selectedTime}
                </Text>
              </View>
              <View
                style={{
                  borderColor: "gray",
                  height: 1,
                  borderWidth: 0.5,
                  marginTop: 10,
                }}
              />

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginVertical: 8,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>To Pay</Text>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  {total + 95}
                </Text>
              </View>
            </View>
          </View>
        </>
      )}


{total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "#088F8F",
            padding: 10,
            marginTop : 100,
            marginBottom: 10,
            marginHorizontal: 15,
            borderRadius: 7,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
              {cart.length} items | RS {total}
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: "400",
                color: "white",
                marginVertical: 6,
              }}
            >
              Extra charges might apply
            </Text>
          </View>

          <Pressable
            onPress={() => navigation.navigate("PickUp")}
            style={{
              marginLeft: "auto",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "600",
                color: "white",
                marginRight: 5,
              }}
            >
              Place Order 
            </Text>
            <Text style={{ fontSize: 20 }}>📦</Text>
          </Pressable>
        </Pressable>
      )}

    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
