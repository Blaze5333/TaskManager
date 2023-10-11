import React from 'react'
import { Button, Image, Text, TouchableOpacity, View ,StatusBar} from 'react-native'
import {useFocusEffect} from '@react-navigation/native'

export default function SplashScreen({navigation,route}) {
    useFocusEffect(
        React.useCallback(() => {
             StatusBar.setBackgroundColor('white');
        },[]),
      );

  return (
    <View style={{backgroundColor:"#61b3ff",flex:1}}>
      <View style={{height:"30%",justifyContent:"center",alignItems:'center',padding:15,backgroundColor:"white",borderBottomEndRadius:30,borderBottomStartRadius:30}}>
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:"#2e325a",fontSize:40,fontWeight:"bold"}}>Manage Your Daily</Text>
        <Text style={{color:"#2e325a",fontSize:40,fontWeight:"bold"}}>Tasks</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',top:20}}>
        <Text style={{color:"#2e325a",fontSize:15}}>Manage your daily task and perform them on</Text>
        <Text style={{color:"#2e325a",fontSize:15}}>time easily.</Text></View>
      </View>
      <View style={{height:"40%",justifyContent:'center',alignItems:"center"}}>
        <Image source={require('./assets/icons/splashimage.jpg')}></Image>
      </View>
      <View style={{height:"30%",justifyContent:'center',alignItems:"center"}}>
         <TouchableOpacity onPress={()=>{
            navigation.navigate(route.params.r)
         }}>
            <View style={{height:80,width:200,justifyContent:'center',alignItems:'center',backgroundColor:"#2e325a",borderRadius:30}}>
                <Text style={{fontSize:25,color:"white",fontWeight:"bold"}}>Get Started</Text>
            </View>
         </TouchableOpacity>
      </View>
      <View>

      </View>
    </View>
  )
}
