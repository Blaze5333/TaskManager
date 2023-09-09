import React from 'react'
import {TouchableOpacity, View,Text} from 'react-native'
export default function DateList({state,setstate,item}) {
  return (
   <TouchableOpacity onPress={()=>{
    setstate(item)
   }} >
    <View style={{backgroundColor:state===item?"#2196F3":"black",height:130,width:90,borderRadius:15,display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:'white'}}>Nov</Text>
      <Text style={{fontSize:40,color:'white',fontWeight:"bold"}}>{item}</Text>
      <Text style={{color:'white'}}>Monday</Text>
    </View>
   </TouchableOpacity>
  )
}
