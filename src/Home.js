import React ,{useState,useEffect} from 'react'
import { FlatList, Text, TouchableOpacity, View,ScrollView } from 'react-native'
import DateList from './DateList'
import { Data } from './data'
import DataList from './DataList'
export default function Home() {
  const [state, setstate] = useState(false)
  const [prevRow, setprevRow] = useState(false)
  useEffect(() => {
    
  },[])
  const data=[1,2,3,4,5,6,7,8,9,10]
  return (
    <ScrollView style={{backgroundColor:"black",flex:1}}>
        <View >
        <FlatList 
        style={{top:20,left:10,right:20}}
        data={data}
        horizontal={true}
        renderItem={({item})=>(
          <DateList state={state} setstate={setstate} item={item}/>
        )}
        ItemSeparatorComponent={()=>(
          <View style={{width:15,justifyContent:"center",alignItems:'center'}}>
            <Text style={{fontSize:50}}>|</Text>
          </View>
        )}
        /></View>
        <View style={{flexDirection:"row",top:40,justifyContent:'space-evenly'}}>
          <TouchableOpacity>
            <View style={{borderRadius:15,width:150,height:80,opacity:0.4,backgroundColor:"white",justifyContent:'center',alignItems:'center'}}>
              <Text style={{color:"white",fontSize:20,fontWeight:'bold'}}>Pending</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{borderRadius:15,width:150,height:80,opacity:0.4,backgroundColor:"white",justifyContent:'center',alignItems:'center'}}>
              <Text style={{color:"white",fontSize:20,fontWeight:'bold'}}>Completed</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{top:60 }}>
          <FlatList
          data={Data}
          renderItem={({item})=>(<DataList item={item} prevRow={prevRow} setprevRow={setprevRow}/>)}
          ItemSeparatorComponent={()=>(<View style={{height:20}}></View>)}
          ></FlatList>
          <View style={{height:150}}>

          </View>
        </View>
    </ScrollView>
  )
}
