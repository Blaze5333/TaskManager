import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home';
import Add from '../Add';
import Profile from '../Profile';


export default function BottomNav() {
   const Tab = createBottomTabNavigator(); 
  return (
<NavigationContainer>
<Tab.Navigator screenOptions={{
    tabBarStyle:{position:'absolute',marginHorizontal:20,bottom:10,borderRadius:15,backgroundColor:'black'},
    
}} initialRouteName='Add'>
<Tab.Screen component={Home} name='Home' ></Tab.Screen>
<Tab.Screen component={Add} name='Add' ></Tab.Screen>
<Tab.Screen component={Profile} name='Profile' ></Tab.Screen>
</Tab.Navigator>
</NavigationContainer>
  )
}
