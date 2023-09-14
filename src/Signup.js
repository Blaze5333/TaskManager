import React, { useState } from 'react'
import { Text, TouchableOpacity, View,Image,ImageBackground,Pressable,TextInput} from 'react-native'
import {launchImageLibrary,launchCamera} from 'react-native-image-picker';
import DatePicker from 'react-native-date-picker'
import { PermissionsAndroid } from 'react-native';
import axios from 'axios';
export default function Signup({navigation}) {
    const [imageUrl, setimageUrl] = useState('')
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [dob, setdob] = useState('')
    const [phone, setphone] = useState('')
    const [dateOpen, setdateOpen] = useState('')
    const sendData=async()=>{
      console.log({name,email,phone})
        axios.post('http://localhost:3000/signup',{name,email,password,phone,dob,imageUrl}).then((data)=>{
          console.log(data)
        }).catch((err)=>{console.log(err)})
    }
    const addImage=async()=>{
        requestCameraPermission()
        const re=await launchCamera();
        console.log(re)
        setimageUrl(re.assets[0].uri)
        // const result=await launchImageLibrary();
        // console.log(result.assets[0].uri)
        // setimageUrl(result.assets[0].uri)
    }
    const requestCameraPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: "App Camera Permission",
              message:"App needs access to your camera ",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );
        }
        catch(err){}
    }
  return (
    <View style={{flex:1,backgroundColor:"black"}}>
        <View style={{width:"100%",height:"20%",justifyContent:"center",alignItems:"center"}}>
            <ImageBackground source={imageUrl?{uri:imageUrl}:require('./assets/icons/defaultAvatar.png')} style={{height:120,width:120,justifyContent:"flex-end",alignItems:'flex-end'}} imageStyle={{borderRadius:100}}>
            <TouchableOpacity onPress={addImage}>
                <View style={{backgroundColor:"red",height:40,width:40,borderRadius:100,justifyContent:'center',alignItems:"center"}}>
                    <Image source={require('./assets/icons/edit.png')}></Image>
                </View>
            </TouchableOpacity>
            </ImageBackground>
        </View>
        <View  style={{height:"60%",width:'100%',padding:20,justifyContent:"space-evenly"}}>
        <View>
        <TextInput value={name} onChangeText={text=>{setname(text)}} style={{width:"100%",backgroundColor:"rgba(52, 52, 52, 1)",borderRadius:10,padding:10}} placeholder='Full Name' placeholderTextColor={"white"}></TextInput>
        </View>
        <View>
        <TextInput value={email} onChangeText={text=>{setemail(text)}} style={{width:"100%",backgroundColor:"rgba(52, 52, 52, 1)",borderRadius:10,padding:10}} placeholder='Email' placeholderTextColor={"white"}></TextInput>
        </View>
        <Pressable onPress={()=>{ 
          setdateOpen(true)}}>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <TextInput inlineImageLeft='dob' 
        inlineImagePadding={30}  
        value={dob} 
        placeholder={!dob?'Date Of Birth':(dob.getDate()+"/"+ (+dob.getMonth()+1<10?'0'+(+dob.getMonth()+1):dob.getMonth()+1)+"/"+dob.getFullYear())}  
        editable={false} 
        style={{backgroundColor:"rgba(52, 52, 52, 1)",width:'100%',borderRadius:15,padding:10}} 
        placeholderTextColor={'white'}></TextInput>
        </View>
      </Pressable>
    <View>
        <TextInput value={phone} keyboardType='phone-pad' onChangeText={text=>{setphone(text)}} style={{width:"100%",backgroundColor:"rgba(52, 52, 52, 1)",borderRadius:10,padding:10}} placeholder='Phone no.' placeholderTextColor={"white"}></TextInput>
        </View>
        <View>
        <TextInput textContentType='password' value={password} onChangeText={text=>{setpassword(text)}} style={{width:"100%",backgroundColor:"rgba(52, 52, 52, 1)",borderRadius:10,padding:10}} placeholder='Password' placeholderTextColor={"white"}></TextInput>
        </View>
        </View>
        <View style={{height:'10%',width:"100%",justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity onPress={sendData} >
                <View style={{height:60,width:150,borderRadius:15,backgroundColor:'#2196F3',justifyContent:"center",alignItems:"center"}}>
                    <Text style={{color:'white',fontSize:15,fontWeight:"bold"}}>Signup</Text>
                </View>
            </TouchableOpacity>
        </View>
        {dateOpen&&<DatePicker onConfirm={(date)=>{ 
        setdob(date)
        setdateOpen(false)
      }} modal mode={'date'} date={new Date()} open={{dateOpen}} onCancel={()=>{setdateOpen(false)}}></DatePicker>}
    </View>
  )
}
