/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainStackNavigation from './src/Navigation';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
function App({navigation}) {
  // NativeModules.DevSettings.setIsDebuggingRemotely(false); 
  return (
    <Provider store={Store}>
    <MainStackNavigation/>
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
