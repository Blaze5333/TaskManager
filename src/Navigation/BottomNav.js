/*eslint-disable*/
import React from 'react'
import { View,Text,TouchableOpacity,Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home';
import Add from '../Add';
import Profile from '../Profile';

export default function BottomNav() {
  const CustomButton=({children,onPress})=>(
    <TouchableOpacity onPress={onPress} style={{
      top:-30,
      justifyContent:"center",
      alignItems:"center",
    }} activeOpacity={0.6} nextFocusLeft={7} >
      <View style={{
        height:80,width:80,
        borderRadius:100,
        backgroundColor:"red"
      }}>
        {children}
      </View>
    </TouchableOpacity>
  )
   const Tab = createBottomTabNavigator(); 
  return (

<Tab.Navigator screenOptions={{
    tabBarStyle:{position:'absolute',marginHorizontal:20,bottom:10,borderRadius:20,backgroundColor:'white',
    height:75},
    tabBarShowLabel:false,
    header:(()=>(<View style={{height:60,backgroundColor:"black",justifyContent:'center',paddingHorizontal:20}}>
      <Text style={{color:"white",fontWeight:"bold",fontSize:25}}>Hi ! Mustafa</Text>
    </View>)),
    headerStyle:{backgroundColor:"black"}
    
}} initialRouteName='Home' >
<Tab.Screen component={Home} name='Home' options={{
  tabBarIcon:({focused})=>(
    <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <Image source={require('../assets/icons/home.png')} style={{height:35,width:35,tintColor:focused?"blue":"black"}}></Image>
      <Text style={{color:focused?"blue":"black"}}>Home</Text>
    </View>
  ),
}} ></Tab.Screen>
<Tab.Screen component={Add} name='Add' options={{
  tabBarIcon:(({focused})=>(
    <Image resizeMode='contain' source={require('../assets/icons/icons8-add-properties-30.png')} style={{height:40,width:40,tintColor:'white'}}></Image>
  )),
  tabBarButton:(props)=>
  (
    <CustomButton {...props}></CustomButton>
  ),
  headerShown:false
}} ></Tab.Screen>
<Tab.Screen component={Profile} name='Profile' options={{
  tabBarIcon:({focused})=>(
    <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <View style={{width:55,height:55,borderRadius:50,padding:1,borderColor:"blue",borderWidth:focused?2:0}} >
    <Image source={require('../assets/icons/mustafa2.jpeg')} style={{height:"100%",width:"100%",borderRadius:100}} resizeMethod='contain'></Image>
    </View>
      <Text style={{color:focused?"blue":"black"}}>Profile</Text>
    </View>
  ),
  headerShown:false
}}>
</Tab.Screen>
</Tab.Navigator>
  )
}
