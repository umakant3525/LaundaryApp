import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PickUpScreen from './screens/PickUpScreen';
import CartScreen from './screens/CartScreen';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown:false}} />
        <Stack.Screen name="PickUp" component={PickUpScreen} />
        <Stack.Screen name="Cart" component={CartScreen} options={{headerShown:false}}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
