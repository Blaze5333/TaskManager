import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Signup from '../Signup'
import BottomNav from './BottomNav'
import { NavigationContainer } from '@react-navigation/native'
export default function StackNavigation() {
    const  Stack=createStackNavigator()
  return (
    <NavigationContainer>
   <Stack.Navigator initialRouteName='signup' screenOptions={{headerShown:false}}>
   <Stack.Screen name='main' component={BottomNav} ></Stack.Screen>
    <Stack.Screen name='signup' component={Signup}></Stack.Screen>
 </Stack.Navigator>
   </NavigationContainer>
  )
}
