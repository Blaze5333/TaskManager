/*eslint-disable*/
import React, { useState } from 'react'
import { View,Text, TouchableOpacity, TextInput,Pressable,Image,StatusBar } from 'react-native'
import DatePicker from 'react-native-date-picker'
import {useFocusEffect} from '@react-navigation/native';
import { useSelector,useDispatch } from 'react-redux';
import { setDataPermisson } from './redux/actions';
import userReducer from './redux/reducers';
import axios from 'axios';
import Snackbar from "react-native-snackbar"
import { url } from '../credentials';
export default function Add() {
  const dispatch=useDispatch()
  const {userId,permission}=useSelector(state=>state.userReducer)
  useFocusEffect(
    React.useCallback(() => {
        ; // 'light-content' is also available
         StatusBar.setBackgroundColor('#2e325a');
    }, []),
  );
  const [date, setdate] = useState(new Date())
  const [datePicker, setdatePicker] = useState(false)
  const [time, settime] = useState(new Date())
  const [color, setcolor] = useState('slateblue')
  const [title, settitle] = useState('')
  const [note, setnote] = useState('')
  const addNote=()=>{
    try{
      axios.post(`${url}/user/task/${userId}`,{title,note,time,date,color,userId}).then((data)=>{
        Snackbar.show({
          text:"Task Added to the list",
          textColor:"green",
          duration:Snackbar.LENGTH_SHORT,
          backgroundColor:"#D1FFBD"
        })
        
        dispatch(setDataPermisson(1))
        settitle('')
        setnote('')
        setcolor('slateblue')
        setdate(new Date())
        settime(new Date())
      }).catch((err)=>{
        console.log(err)
        Snackbar.show({
          text:"Server Error",
          textColor:"red",
          duration:Snackbar.LENGTH_SHORT,
          backgroundColor:"#FFCCCB"
        })
      })
    }
    catch(err){
      Snackbar.show({
        text:"Server Error",
        textColor:"red",
        duration:Snackbar.LENGTH_SHORT,
        backgroundColor:"#FFCCCB"
      })
    }
  }
  return (
    <View style={{flex:1,backgroundColor:"#2e325a",padding:20}}>
    <View style={{height:'10%'}}>
    <Text style={{color:"white",fontSize:30,fontWeight:'bold'}}>Add Task</Text>
    </View>
        <View style={{height:"78%",flexDirection:"column",justifyContent:"space-evenly"}}>
        <View >
        <Text style={{color:"white",fontSize:20,bottom:5}}>Title</Text>
        <TextInput value={title} onChangeText={text=>{settitle(text)}} style={{backgroundColor:"#2e325a",width:"100%",borderRadius:15,borderColor:'white',borderWidth:0.5,fontSize:15,padding:15}}></TextInput>
        </View>
        <View >
        <Text style={{color:"white",fontSize:20,bottom:5}}>Note</Text>
        <TextInput value={note} onChangeText={text=>{setnote(text)}} multiline  style={{padding:15,backgroundColor:"#2e325a",textAlignVertical:'top',fontSize:15,width:"100%",borderRadius:15,height:150,borderColor:'white',borderWidth:0.5}}></TextInput>
        </View>
        <View>
        <Text style={{color:"white",fontSize:20,bottom:5}}>Date</Text>
      <Pressable onPress={()=>{setdatePicker('date')}}>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <TextInput inlineImageLeft='calender' 
        inlineImagePadding={30}  
        value={date} 
        placeholder={date.getDate()+"/"+ (+date.getMonth()+1<10?'0'+(+date.getMonth()+1):date.getMonth()+1)+"/"+date.getFullYear()}  
        editable={false} 
        style={{backgroundColor:"#2e325a",borderWidth:0.5,borderColor:'white',width:'100%',borderRadius:15,padding:10}} 
        placeholderTextColor={'white'}></TextInput>
        </View>
      </Pressable>
      </View>
      <View >
        <Text style={{color:"white",fontSize:20,bottom:5}}>Time</Text>
      <Pressable onPress={()=>{setdatePicker('time')}}>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <TextInput value={date}
        inlineImageLeft='clock' 
        placeholder={(+time.getHours()>12?(+time.getHours()-12+""):(+time.getHours()))+":"+(+time.getMinutes()<10?("0"+time.getMinutes()):time.getMinutes())+''+(+time.getHours()>12?" PM":" AM")}  
        editable={false} 
        inlineImagePadding={30}
        style={{backgroundColor:"#2e325a",borderWidth:0.5,borderColor:'white',width:"100%",borderRadius:15,padding:10}} 
        placeholderTextColor={'white'}></TextInput>
        </View>
      </Pressable>
      </View>
      <View >
        <Text style={{color:"white",fontSize:20,bottom:5}}>Color</Text>
        <View style={{flexDirection:"row"}}>
          <TouchableOpacity onPress={()=>{setcolor('slateblue')}}>
            <View style={{height:40,width:40,borderRadius:100,backgroundColor:"slateblue", borderColor:'white',borderWidth:color==='slateblue'?2:0}}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{setcolor("#F44336")}}>
            <View style={{height:40,width:40,borderRadius:100,backgroundColor:"#F44336",left:10,borderColor:'white',borderWidth:color==='#F44336'?2:0}}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{setcolor("#FF9800")}}>
            <View style={{height:40,width:40,borderRadius:100,backgroundColor:"#FF9800",left:20,borderColor:'white',borderWidth:color==="#FF9800"?2:0}}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={addNote}>
            <View style={{height:50,width:150,borderRadius:15,backgroundColor:"#2196F3",left:60,justifyContent:"center",alignItems:"center"}}>
              <Text style={{color:"white",fontWeight:"bold",fontSize:20}}>Add</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {datePicker&&<DatePicker onConfirm={(date)=>{ 
        if(datePicker==='date'){
        setdate(date)
        }
        else{
          settime(date)
        } 
        console.log(date)
        setdatePicker(false)
      }} modal mode={datePicker} date={date} open={datePicker?true:false} onCancel={()=>{setdatePicker(false)}}></DatePicker>}
    </View>
    </View>
  )
}
