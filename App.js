/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View,StyleSheet ,Text,Image,TouchableOpacity} from 'react-native';
import Home from './src/Home';
import Add from './src/Add';
import Profile from './src/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
function App({navigation}) {
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
<NavigationContainer>
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
    <Image source={require('./src/assets/icons/home.png')} style={{height:35,width:35,tintColor:focused?"blue":"black"}}></Image>
      <Text style={{color:focused?"blue":"black"}}>Home</Text>
    </View>
  ),
}} ></Tab.Screen>
<Tab.Screen component={Add} name='Add' options={{
  tabBarIcon:(({focused})=>(
    <Image resizeMode='contain' source={require('./src/assets/icons/icons8-add-properties-30.png')} style={{height:40,width:40,tintColor:'white'}}></Image>
  )),
  tabBarButton:(props)=>
  (
    <CustomButton {...props}></CustomButton>
  )
}} ></Tab.Screen>
<Tab.Screen component={Profile} name='Profile' options={{
  tabBarIcon:({focused})=>(
    <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <Image source={require('./src/assets/icons/icons8-male-user-50.png')} style={{height:40,width:40,tintColor:focused?"blue":"black"}}></Image>
      <Text style={{color:focused?"blue":"black"}}>Profile</Text>
    </View>
  )
}}>
</Tab.Screen>
</Tab.Navigator>
</NavigationContainer>
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
