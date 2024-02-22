import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Pressable,
  Button,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from '@react-navigation/native';
const PickUpScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [delivery, setDelivery] = useState([]);
  const navigation = useNavigation();

  const handleDateSelected = (event, date) => {
    setShowDatePicker(false);
    if (date !== undefined) {
      setSelectedDate(date);
      console.log("Selected date:", date);
    }
  };

  const handleTimeSelected = (time) => {
    setSelectedTime(time);
    console.log("Selected time:", time);
  };

  const times = [
    {
      id: "0",
      time: "11:00 PM",
    },
    {
      id: "1",
      time: "12:00 PM",
    },
    {
      id: "2",
      time: "1:00 PM",
    },
    {
      id: "3",
      time: "2:00 PM",
    },
    {
      id: "4",
      time: "3:00 PM",
    },
    {
      id: "5",
      time: "4:00 PM",
    },
  ];

  const deliveryTime = [
    {
      id: "0",
      name: "2-3 Days",
    },
    {
      id: "1",
      name: "3-4 Days",
    },
    {
      id: "2",
      name: "4-5 Days",
    },
    {
      id: "3",
      name: "5-6 Days",
    },
    {
      id: "4",
      name: "Tomorrow",
    },
  ];

  const today = new Date();

  const proceedToCart = () => {
    if (!selectedDate || !selectedTime || !delivery) {
      Alert.alert(
        "Empty or invalid",
        "Please select all the fields date time days ",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    }
    if (selectedDate && selectedTime && delivery) {
      navigation.replace("Cart", {
        pickUpDate: selectedDate,
        selectedTime: selectedTime,
        no_Of_days: delivery,
      });
    }
  };
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginHorizontal: 10 }}>
        <Text style={styles.label}>Enter Address</Text>
        <TextInput style={styles.input} placeholder="Enter your address" />

        <Button
          title="Select Pick Up Date"
          style={styles.label}
          onPress={() => setShowDatePicker(true)}
        />

        {showDatePicker && (
          <DateTimePicker
            value={selectedDate || today}
            mode="date"
            display="default"
            onChange={handleDateSelected}
            minimumDate={today} // Restrict selection to today and future dates
            style={{ marginBottom: 20 }}
            textColor="blue" // Custom text color
            backgroundColor="lightgray" // Custom background color
          />
        )}

        {selectedDate && (
          <View style={styles.selectedDateTimeContainer}>
            <Text style={styles.selectedDateTimeLabel}>
              Selected Date: {selectedDate.toDateString()}{" "}
            </Text>
          </View>
        )}

        <Text style={styles.label}>Select Pick Time</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {times.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => handleTimeSelected(item.time)}
              style={[
                styles.timeButton,
                selectedTime === item.time && styles.selectedTimeButton,
              ]}
            >
              <Text style={styles.buttonText}>{item.time}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <Text style={styles.label}>Delivery Date </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {deliveryTime.map((item, i) => (
            <Pressable
              style={[
                styles.deliveryButton,
                delivery.includes(item.name) && styles.selectedDeliveryButton,
              ]}
              onPress={() => setDelivery(item.name)}
              key={i}
            >
              <Text style={styles.buttonText}>{item.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <Pressable
        style={{
          backgroundColor: "#088F8F",
          padding: 10,
          marginTop: 130,
          marginHorizontal: 15,
          borderRadius: 7,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        onPress={proceedToCart}
      >
        <View>
          <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
            4 items | RS 100
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

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: "white",
              marginRight: 5,
            }}
          >
            Proceed to Cart
          </Text>
          <Text style={{ fontSize: 20 }}>🛒</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginHorizontal: 10,
    marginTop: 10,
  },
  input: {
    padding: 10,
    borderColor: "gray",
    borderWidth: 0.7,
    borderRadius: 9,
    marginVertical: 10,
    paddingVertical: 40,
    marginHorizontal: 10,
  },
  timeButton: {
    margin: 10,
    borderRadius: 7,
    padding: 15,
    borderColor: "gray",
    borderWidth: 0.7,
  },
  selectedTimeButton: {
    borderColor: "red",
  },
  deliveryButton: {
    margin: 10,
    borderRadius: 7,
    padding: 15,
    borderColor: "gray",
    borderWidth: 0.7,
  },
  selectedDeliveryButton: {
    borderColor: "red",
  },
  buttonText: {
    fontSize: 16,
  },
  selectedDateTimeContainer: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  selectedDateTimeLabel: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  selectedDateTime: {
    fontSize: 16,
  },
});

export default PickUpScreen;
