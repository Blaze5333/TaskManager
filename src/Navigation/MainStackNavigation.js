import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import StackNavigation from './StackNavigation'
import SplashScreen from '../SplashScreen'
export default function MainStackNavigation() {
    const Tab=createStackNavigator()
  return (
   <NavigationContainer>
   <Tab.Navigator initialRouteName='splash' screenOptions={{headerShown:false}} >
    <Tab.Screen name='splash' component={SplashScreen} ></Tab.Screen>
    <Tab.Screen name='app' component={StackNavigation}></Tab.Screen>
   </Tab.Navigator>
   </NavigationContainer>
  )
}
