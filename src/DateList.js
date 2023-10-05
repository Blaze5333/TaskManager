import React from 'react'
import {TouchableOpacity, View,Text} from 'react-native'
export default function DateList({state,setstate,item,setdata1,data2,listtype,setlisttype}) {
  const monthInitials = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const daysOfWeek = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ];
  const date=new Date(item)
  const date1=date.getDate()
  const month=monthInitials[date.getMonth()]
  const day=daysOfWeek[date.getDay()]
  return (
   <TouchableOpacity onPress={()=>{
     setlisttype('pending')
    setstate(item)
      setdata1(data2.filter((e)=>(e.pending===1&&e.date.split('T')[0]===item)))
    
    
    
   }} >
    <View style={{backgroundColor:state===item?"#2196F3":"black",height:130,width:90,borderRadius:15,display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:'white'}}>{month}</Text>
      <Text style={{fontSize:40,color:'white',fontWeight:"bold"}}>{date1}</Text>
      <Text style={{color:'white'}}>{day}</Text>
    </View>
   </TouchableOpacity>
  )
}
