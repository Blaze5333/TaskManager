import React, { useEffect, useRef,useState } from 'react'
import {View,TouchableOpacity, Text, Image, Modal,ScrollView} from 'react-native'
import { Swipeable,GestureHandlerRootView } from 'react-native-gesture-handler'
export default function DataList({item,prevRow,setprevRow}) {
    const [open, setopen] = useState(false)
    let rf;
   const closeRow=()=>{
    console.log(prevRow)
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
         <View  style={{backgroundColor:item.Color,width:300,height:400,borderRadius:30}}>
          <View style={{width:'100%',backgroundColor:'white',height:50,top:0,borderTopRightRadius:30,borderTopLeftRadius:30,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'black',fontSize:25,fontWeight:'bold'}}>{item.Title}</Text>
          </View>
          <ScrollView contentContainerStyle={{justifyContent:'center',alignItems:'center'}} style={{width:'100%',height:290,paddingTop:0,paddingHorizontal:10}}>
            <Text style={{color:'white',}}>{item.Description}</Text>
            <Text style={{color:'white',}}>Date : {item.Date}</Text>
            <Text style={{color:'white',}}>Time: {item.Time}</Text>
          </ScrollView>
         <TouchableOpacity onPress={()=>{setopen(false)}}>
            <View style={{width:'100%', height:60,backgroundColor:"white",borderBottomEndRadius:30,borderBottomStartRadius:30,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'black',fontSize:25,fontFamily:'bold'}}>Ok</Text>
            </View>
         </TouchableOpacity>
         </View>

        </View>
    </Modal>
<Swipeable ref={ref=>rf=ref} friction={1} onSwipeableOpen={()=>{closeRow()}}  renderLeftActions={()=>(<TouchableOpacity onPress={()=>{prevRow.close()}} >
<View style={{backgroundColor:'green', height:100,borderRadius:15,width:90,left:5,top:5,justifyContent:'center',alignItems:'center'}}>
<Image source={require('./assets/icons/completed.png')}></Image>
<Text style={{color:"white"}}>Completed</Text>
</View></TouchableOpacity>)} 
renderRightActions={()=>(
<TouchableOpacity>
<View style={{backgroundColor:'red', height:100,borderRadius:15,width:90,right:5,top:5,justifyContent:'center',alignItems:'center'}}>
<Image source={require('./assets/icons/delete.png')}></Image>
<Text style={{color:"white"}}>Delete</Text>
</View></TouchableOpacity>)}
 >
<TouchableOpacity onPress={()=>{setopen(true)
   console.log(open)
}} >
 <View style={{backgroundColor:item.Color,paddingHorizontal:20,borderRadius:20,marginHorizontal:10,height:110,paddingTop:10}}>
  <Text style={{color:"white",fontSize:15,fontWeight:'bold'}}>{item.Title}</Text>
  <View style={{display:'flex',flexDirection:'row', top:5,alignItems:'center'}}>
    <Image source={require('./assets/icons/clock.png')} style={{height:25,width:25}}></Image>
    <Text style={{color:'white',left:10}}>{item.Time}</Text>
  </View>
  <Text style={{color:'white',top:10}}>{item.Description}</Text>
 </View>
</TouchableOpacity>
</Swipeable>
</GestureHandlerRootView>
  )
}
