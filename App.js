/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View,StyleSheet ,Text,Image,TouchableOpacity,SafeAreaView} from 'react-native';
import Home from './src/Home';
import Add from './src/Add';
import Profile from './src/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeModules } from 'react-native';
import StackNavigation from './src/Navigation';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
function App({navigation}) {
  // NativeModules.DevSettings.setIsDebuggingRemotely(false);

  const Tab = createBottomTabNavigator(); 
  return (
    <Provider store={Store}>
    <StackNavigation/>
    </Provider>
  )
  
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
