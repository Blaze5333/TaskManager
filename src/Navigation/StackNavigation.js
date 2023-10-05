 import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Signup from '../Signup'
import BottomNav from './BottomNav'
import { NavigationContainer, useFocusEffect } from '@react-navigation/native'
import Login from '../Login'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setUserId } from '../redux/actions'
import { useDispatch,useSelector } from 'react-redux'
export default function StackNavigation() {
  const {userId}=useSelector(state=>state.userReducer)
  const dispatch=useDispatch()
  const [user, setuser] = useState('')
    const  Stack=createStackNavigator()
   
   
   useEffect(() => {
    AsyncStorage.getItem('user').then((token)=>{
        if(token){
          dispatch(setUserId(token))
          console.log('hello from main')
          setuser('main')
         }
        else{
          setuser('login')
        }
      })
     
   }, [])
  return (
    <NavigationContainer>
   {user&&<Stack.Navigator initialRouteName={user} screenOptions={{headerShown:false}}>
   <Stack.Screen name='main' component={BottomNav} ></Stack.Screen>
    <Stack.Screen name='signup' component={Signup}></Stack.Screen>
    <Stack.Screen name='login' component={Login}></Stack.Screen>
 </Stack.Navigator>}
   </NavigationContainer>
  )
}
