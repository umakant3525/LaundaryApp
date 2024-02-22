import { StyleSheet, Text, View, TextInput, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HorizontalDatePicker from 'react-native-horizontal-date-picker';

const PickUpScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

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
      id: "3", // Corrected id
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

  const handleDateSelected = (date) => {
    setSelectedDate(date);
    console.log("Selected date:", date);
  };

  const handleTimeSelected = (time) => {
    setSelectedTime(time);
    console.log("Selected time:", time);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginHorizontal: 10 }}>
        <Text style={styles.label}>Enter Address</Text>
        <TextInput style={styles.input} placeholder="Enter your address" />

        <Text style={styles.label}>Pick Up Date</Text>
        <HorizontalDatePicker
          date={selectedDate}
          onDateChange={handleDateSelected}
          mode="day"
          textColor="#222831"
          fadeToColor="#ececec"
          androidVariant="nativeAndroid"
          style={{ marginBottom: 20 }}
        />
        <Text style={styles.label}>Select Time</Text>
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
              <Text style={styles.timeButtonText}>{item.time}</Text>
            </Pressable>
          ))}
        </ScrollView>

        {selectedDate && selectedTime && (
          <View style={styles.selectedDateTimeContainer}>
            <Text style={styles.selectedDateTimeLabel}>Selected Date and Time:</Text>
            <Text style={styles.selectedDateTime}>
              {selectedDate.toDateString()} {selectedTime}
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: 10,
    marginTop: 10,
  },
  input: {
    padding: 10,
    borderColor: 'gray',
    borderWidth: 0.7,
    borderRadius: 9,
    marginVertical: 10,
    paddingVertical: 40,
    marginHorizontal: 10,
  },
  selectedItemTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  flatListContainerStyle: {
    height: 50,
    marginTop: 10,
    marginHorizontal: 10,
  },
  timeButton: {
    margin: 10,
    borderRadius: 7,
    padding: 15,
    borderColor: 'gray',
    borderWidth: 0.7,
  },
  selectedTimeButton: {
    borderColor: 'red',
  },
  timeButtonText: {
    fontSize: 16,
  },
  selectedDateTimeContainer: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  selectedDateTimeLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  selectedDateTime: {
    fontSize: 16,
  },
});

export default PickUpScreen;
