import React, { useState } from 'react'
import { View,Text, TouchableOpacity, TextInput,Pressable,Image,StatusBar } from 'react-native'
import DatePicker from 'react-native-date-picker'
import {useFocusEffect} from '@react-navigation/native';
export default function Add() {
  useFocusEffect(
    React.useCallback(() => {
        ; // 'light-content' is also available
         StatusBar.setBackgroundColor('black');
        
    }, []),
  );
  const [date, setdate] = useState(new Date())
  const [datePicker, setdatePicker] = useState(false)
  const [time, settime] = useState(new Date())
  const [color, setcolor] = useState(1)
  return (
    <View style={{flex:1,backgroundColor:"black",padding:20}}>
    <View style={{height:'10%'}}>
    <Text style={{color:"white",fontSize:30,fontWeight:'bold'}}>Add Task</Text>
    </View>
        <View style={{height:"78%",flexDirection:"column",justifyContent:"space-evenly"}}>
        <View >
        <Text style={{color:"white",fontSize:20,bottom:5}}>Title</Text>
        <TextInput style={{backgroundColor:"black",width:"100%",borderRadius:15,borderColor:'white',borderWidth:0.5,fontSize:15,padding:15}}></TextInput>
        </View>
        <View >
        <Text style={{color:"white",fontSize:20,bottom:5}}>Note</Text>
        <TextInput multiline  style={{padding:15,backgroundColor:"black",textAlignVertical:'top',fontSize:15,width:"100%",borderRadius:15,height:150,borderColor:'white',borderWidth:0.5}}></TextInput>
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
        style={{backgroundColor:"black",borderWidth:0.5,borderColor:'white',width:'100%',borderRadius:15,padding:10}} 
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
        placeholder={(+time.getHours()>12?(+time.getHours()-12+""):(+time.getHours()))+":"+(+time.getMinutes()<10?("0"+time.getMinutes()):time.getMinutes())+ (+time.getHours()>12?" PM":" AM")}  
        editable={false} 
        inlineImagePadding={30}
        style={{backgroundColor:"black",borderWidth:0.5,borderColor:'white',width:"100%",borderRadius:15,padding:10}} 
        placeholderTextColor={'white'}></TextInput>
        </View>
      </Pressable>
      </View>
      <View >
        <Text style={{color:"white",fontSize:20,bottom:5}}>Color</Text>
        <View style={{flexDirection:"row"}}>
          <TouchableOpacity onPress={()=>{setcolor(1)}}>
            <View style={{height:40,width:40,borderRadius:100,backgroundColor:"slateblue", borderColor:'white',borderWidth:color===1?2:0}}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{setcolor(2)}}>
            <View style={{height:40,width:40,borderRadius:100,backgroundColor:"#F44336",left:10,borderColor:'white',borderWidth:color===2?2:0}}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{setcolor(3)}}>
            <View style={{height:40,width:40,borderRadius:100,backgroundColor:"#FF9800",left:20,borderColor:'white',borderWidth:color===3?2:0}}></View>
          </TouchableOpacity>
          <TouchableOpacity>
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
      }} modal mode={datePicker} date={date} open={{datePicker}} onCancel={()=>{setdatePicker(false)}}></DatePicker>}
    </View>
    </View>
  )
}
