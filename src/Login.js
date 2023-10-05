/*eslint-disable*/
import axios from 'axios'
import React, { useState } from 'react'
import {Image, View,TextInput, TouchableOpacity,Text,Alert,StatusBar} from 'react-native'
import { useSelector,useDispatch } from 'react-redux'
import { setUserId } from './redux/actions'
import userReducer from './redux/reducers'
import {useFocusEffect} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function Login({navigation}) {
   
   useFocusEffect(
      React.useCallback(() => {
          ; // 'light-content' is also available
           StatusBar.setBackgroundColor('black');
          
      },[]),
    );
    const {userId}=useSelector(state=>state.userReducer)
    const dispatch=useDispatch()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const login=()=>{
       if(!email || !password){
        console.log('object')
        Alert.alert("Error","All fields are manadatory",[
            "OK",()=>{console.log('pressed')}
          ])
       }
       else{
         try{
        axios.post('http://localhost:3000/user/login',{email,password}).then(async(data)=>{
             if(data.data.error===1){
                Alert.alert("Error","Invalid User Credentials",[
                    "OK",()=>{console.log('pressed')}
                  ])
             }
             else{
               console.log(data.data.id)
                dispatch(setUserId(data.data.id))
                await AsyncStorage.setItem('user',data.data.id)
                navigation.navigate('main')
             }
        })
      }
      catch(err){
         Alert.alert("Server Error","Try Again Later",[
            {text:"Ok",onPress:()=>{}},
          ])
      }
       }
    }
  return (
   <View style={{flex:1,backgroundColor:"black"}}>
    <View style={{height:"50%",justifyContent:'center',alignItems:'center'}}>
        <Image source={require('./assets/icons/logo.png')} style={{resizeMode:"contain",width:"80%"}}></Image>
    </View>
    <View style={{height:"40%",padding:20,justifyContent:'space-evenly'}}>
     <View>
     <TextInput value={email} onChangeText={text=>{setemail(text)}} style={{width:"100%",backgroundColor:"rgba(52, 52, 52, 1)",borderRadius:10,padding:10}} placeholder='Email' placeholderTextColor={"white"}></TextInput>
     </View>
     <View>
     <TextInput value={password} secureTextEntry onChangeText={text=>{setpassword(text)}} style={{width:"100%",backgroundColor:"rgba(52, 52, 52, 1)",borderRadius:10,padding:10}} placeholder='Password' placeholderTextColor={"white"}></TextInput>
     </View>
     <TouchableOpacity style={{justifyContent:"center",alignItems:"center"}} onPress={login}>
        <View style={{height:60,width:150,borderRadius:15,backgroundColor:'#2196F3',justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:'white',fontSize:15,fontWeight:"bold"}}>Login</Text>
        </View>
     </TouchableOpacity>
     <View style={{justifyContent:"center",alignItems:"center"}}>
          <Text style={{color:"white"}}>Don't have an account ? <Text style={{color:"#2196F3",textDecorationLine:'underline'}} onPress={()=>{navigation.navigate('signup')}}>Signup</Text></Text>
        </View>
    </View>
   </View>
  )
}
