import React from 'react'
import {TouchableOpacity, View,Text} from 'react-native'
export default function DateList({state,setstate,item}) {
  return (
   <TouchableOpacity onPress={()=>{
    setstate(item)
   }} >
    <View style={{backgroundColor:state===item?"blue":"white",height:130,width:90,borderRadius:20,display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:40,color:'black',fontWeight:"bold"}}>{item}</Text>
      <Text style={{color:'black'}}>November</Text>
      <Text style={{color:'black'}}>2003</Text>
    </View>
   </TouchableOpacity>
  )
}
