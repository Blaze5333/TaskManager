/*eslint-disable*/
import axios from 'axios'
import React, { useEffect, useRef,useState } from 'react'
import {View,TouchableOpacity, Text, Image, Modal,ScrollView} from 'react-native'
import { Swipeable,GestureHandlerRootView } from 'react-native-gesture-handler'
import { url } from '../credentials'
export default function DataList({item,prevRow,setprevRow,refresh,setrefresh,id}) {
    const [open, setopen] = useState(false)
    // const [time, settime] = useState(new Date(item.time))
    // const [date, setdate] = useState(new Date(item.date))
    const date=new Date(item.date)
    const time=new Date(item.time)
    const deleteNote=()=>{
      axios.delete(`${url}/user/task/${id}`).then((d)=>{
        
        setrefresh(id)
             prevRow.close()
        }) 
    }
    const completeNote=()=>{
      axios.post(`${url}/user/task/update/${id}`).then((d)=>{
      
        setrefresh(id)
        prevRow.close()
      })
    }
    let rf;
   const closeRow=()=>{
    if(prevRow&&prevRow!==rf){
        prevRow.close()
        setprevRow(rf)
    }
    else{
        setprevRow(rf)
    }
   }
    useEffect(() => {
   
    }, [])
  return (
    <GestureHandlerRootView>
    <Modal  visible={open}  transparent>
        <View  style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor: 'rgba(52, 52, 52, 0.6)'}}>
         <View  style={{backgroundColor:item.color,width:300,height:400,borderRadius:30}}>
          <View style={{width:'100%',backgroundColor:'white',height:50,top:0,borderTopRightRadius:30,borderTopLeftRadius:30,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'black',fontSize:25,fontWeight:'bold'}}>{item.title}</Text>
          </View>
          <ScrollView contentContainerStyle={{justifyContent:'center',alignItems:'center'}} style={{width:'100%',height:290,paddingTop:0,paddingHorizontal:10}}>
            <Text style={{color:'white',}}>{item.note}</Text>
            <Text style={{color:'white',}}>Date : {date.getDate()+"/"+ (+date.getMonth()+1<10?'0'+(+date.getMonth()+1):date.getMonth()+1)+"/"+date.getFullYear()}</Text>
            <Text style={{color:'white',}}>Time: {(+time.getHours()>12?(+time.getHours()-12+""):(+time.getHours()))+":"+(+time.getMinutes()<10?("0"+time.getMinutes()):time.getMinutes())+''+(+time.getHours()>12?" PM":" AM")}</Text>
          </ScrollView>
         <TouchableOpacity onPress={()=>{setopen(false)}}>
            <View style={{width:'100%', height:60,backgroundColor:"white",borderBottomEndRadius:30,borderBottomStartRadius:30,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'black',fontSize:25,fontFamily:'bold'}}>Ok</Text>
            </View>
         </TouchableOpacity>
         </View>

        </View>
    </Modal>
{item.pending===1?
  <Swipeable ref={ref=>rf=ref} friction={1}  onSwipeableOpen={()=>{
  closeRow()}}  renderLeftActions={()=>(
<TouchableOpacity onPress={completeNote}>
<View style={{backgroundColor:'green', height:100,borderRadius:15,width:90,left:5,top:5,justifyContent:'center',alignItems:'center'}}>
<Image source={require('./assets/icons/completed.png')}></Image>
<Text style={{color:"white"}}>Completed</Text>
</View></TouchableOpacity>)} 
renderRightActions={()=>(
<TouchableOpacity onPress={deleteNote}>
<View style={{backgroundColor:'red', height:100,borderRadius:15,width:90,right:5,top:5,justifyContent:'center',alignItems:'center'}}>
<Image source={require('./assets/icons/delete.png')}></Image>
<Text style={{color:"white"}}>Delete</Text>
</View></TouchableOpacity>)}
 >
<TouchableOpacity onPress={()=>{setopen(true)
   console.log(open)
}} >
 <View style={{backgroundColor:item.color,paddingHorizontal:20,borderRadius:20,marginHorizontal:10,height:110,paddingTop:10}}>
  <Text style={{color:"white",fontSize:15,fontWeight:'bold'}}>{item.title}</Text>
  <View style={{display:'flex',flexDirection:'row', top:5,alignItems:'center'}}>
    <Image source={require('./assets/icons/clock.png')} style={{height:25,width:25}}></Image>
    <Text style={{color:'white',left:10}}>{(+time.getHours()>12?(+time.getHours()-12+""):(+time.getHours()))+":"+(+time.getMinutes()<10?("0"+time.getMinutes()):time.getMinutes())+''+(+time.getHours()>12?" PM":" AM")}</Text>
  </View>
  <Text style={{color:'white',top:10}}>{item.note}</Text>
 </View>
</TouchableOpacity>
</Swipeable>:''}
{item.pending===0?
  <Swipeable ref={ref=>rf=ref} friction={1} onSwipeableOpen={()=>{
  closeRow()}} 
  disableLeftSwipe
renderRightActions={()=>(
<TouchableOpacity onPress={deleteNote}>
<View style={{backgroundColor:'red', height:100,borderRadius:15,width:90,right:5,top:5,justifyContent:'center',alignItems:'center'}}>
<Image source={require('./assets/icons/delete.png')}></Image>
<Text style={{color:"white"}}>Delete</Text>
</View></TouchableOpacity>)}
 >
<TouchableOpacity onPress={()=>{setopen(true)
   console.log(open)
}} >
 <View style={{backgroundColor:item.color,paddingHorizontal:20,borderRadius:20,marginHorizontal:10,height:110,paddingTop:10}}>
  <Text style={{color:"white",fontSize:15,fontWeight:'bold'}}>{item.title}</Text>
  <View style={{display:'flex',flexDirection:'row', top:5,alignItems:'center'}}>
    <Image source={require('./assets/icons/clock.png')} style={{height:25,width:25}}></Image>
    <Text style={{color:'white',left:10}}>{(+time.getHours()>12?(+time.getHours()-12+""):(+time.getHours()))+":"+(+time.getMinutes()<10?("0"+time.getMinutes()):time.getMinutes())+''+(+time.getHours()>12?" PM":" AM")}</Text>
  </View>
  <Text style={{color:'white',top:10}}>{item.note}</Text>
 </View>
</TouchableOpacity>
</Swipeable>:''}
</GestureHandlerRootView>
  )
}
