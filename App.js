import React from 'react';
import { Provider } from 'react-redux'; 
import { SafeAreaView } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import store from './store'; 

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <HomeScreen />
      </SafeAreaView>
    </Provider>
  );
}
