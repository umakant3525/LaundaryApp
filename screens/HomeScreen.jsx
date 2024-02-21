import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Pressable, Alert, SafeAreaView, TextInput, ScrollView } from "react-native";
import { MaterialIcons, Feather } from '@expo/vector-icons';
import * as Location from "expo-location";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import DressItem from "../components/DressItem";
import { useSelector , useDispatch} from 'react-redux';
import { getProducts } from "../ProductReducer";

const HomeScreen = ({ navigation }) => {


    const cart = useSelector((state) => state.cart.cart);
    //console.log(cart);

  
    const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
        "We are loading your location..."
    );
    const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);

    useEffect(() => {
        checkIfLocationEnabled();
        getCurrentLocation();
    }, []);

    const checkIfLocationEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync();
        if (!enabled) {
            Alert.alert(
                "Location services not enabled",
                "Please enable the location services",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel",
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") },
                ],
                { cancelable: false }
            );
        } else {
            setLocationServicesEnabled(enabled);
        }
    };

    const getCurrentLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
            Alert.alert(
                "Permission denied",
                "Allow the app to use the location services",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel",
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") },
                ],
                { cancelable: false }
            );
        }

        const { coords } = await Location.getCurrentPositionAsync();

        if (coords) {
            const { latitude, longitude } = coords;

            let response = await Location.reverseGeocodeAsync({
                latitude,
                longitude,
            });

            for (let item of response) {
                let address = `${item.name} ${item.city} ${item.postalCode}`;
                setDisplayCurrentAddress(address);
            }
        }
    };

    const services = [
        {
          id: "0",
          image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
          name: "shirt",
          quantity: 0,
          price: 10,
        },
        {
          id: "11",
          image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
          name: "T-shirt",
          quantity: 0,
          price: 10,
        },
        {
          id: "12",
          image: "https://cdn-icons-png.flaticon.com/128/9609/9609161.png",
          name: "dresses",
          quantity: 0,
          price: 10,
        },
        {
          id: "13",
          image: "https://cdn-icons-png.flaticon.com/128/599/599388.png",
          name: "jeans",
          quantity: 0,
          price: 10,
        },
        {
          id: "14",
          image: "https://cdn-icons-png.flaticon.com/128/9431/9431166.png",
          name: "Sweater",
          quantity: 0,
          price: 10,
        },
        {
          id: "15",
          image: "https://cdn-icons-png.flaticon.com/128/3345/3345397.png",
          name: "shorts",
          quantity: 0,
          price: 10,
        },
        {
          id: "16",
          image: "https://cdn-icons-png.flaticon.com/128/293/293241.png",
          name: "Sleeveless",
          quantity: 0,
          price: 10,
        },
      ];


      const product = useSelector((state) => state.product.product);
     // console.log(product)

      const dispatch = useDispatch();
      useEffect(() => {
        if (product.length > 0) return;
    
        // const fetchProducts = async () => {
        //   const colRef = collection(db,"types");
        //   const docsSnap = await getDocs(colRef);
        //   docsSnap.forEach((doc) => {
        //     items.push(doc.data());
        //   });
        //   items?.map((service) => dispatch(getProducts(service)));
        // };
        // fetchProducts();

        const fetchProducts =  () => {

            services.map((service)=>dispatch(getProducts(service))) 
        }
          
        fetchProducts();
      }, []);

  

    return (
        <SafeAreaView style={{ flex: 1 }}>
          
                {/* Location and Profile */}
                <View style={{ flexDirection: "row", alignItems: "center", padding: 20 }}>
                    <MaterialIcons name="location-on" size={30} color="#fd5c63" />
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: "600" }}>Home</Text>
                        <Text>{displayCurrentAddress}</Text>
                    </View>
                    <Pressable onPress={() => navigation.navigate("Profile")} style={{ marginLeft: "auto", marginRight: 7 }}>
                        <Image style={{ width: 50, height: 50, borderRadius: 20 }} source={require('../assets/1.jpg')} />
                    </Pressable>
                </View>
                <ScrollView>
                {/* Search Bar */}
                <View style={{ padding: 10, margin: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderWidth: 0.8, borderColor: "#C0C0C0", borderRadius: 7 }}>
                    <TextInput placeholder="Search for items or More" />
                    <Feather name="search" size={24} color="#fd5c63" />
                </View>
                {/* Image Carousel */}
                <Carousel />
                {/* Services Component */}
                <Services />
               
                {/* Render all the Products */}
                {product.map((item, index) => (
                    <DressItem item={item} key={index} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
