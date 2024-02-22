import React from 'react';
import { Provider } from 'react-redux'; 
import { SafeAreaView } from 'react-native';
import store from './store'; 
import StackNavigator from './StackNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StackNavigator />
      </SafeAreaView>
    </Provider>
  );
}
