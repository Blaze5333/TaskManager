/*eslint-disable*/
import React ,{useState,useEffect} from 'react'
import { FlatList, Text, TouchableOpacity, View,ScrollView,StatusBar,LogBox } from 'react-native'
import DateList from './DateList'
import DataList from './DataList'
import {useFocusEffect} from '@react-navigation/native';
import { useSelector,useDispatch } from 'react-redux'
import userReducer from './redux/reducers'
import { setDataPermisson } from './redux/actions'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { url } from '../credentials'
export default function Home({navigation}) {
  const {userId,permission}=useSelector(state=>state.userReducer)
  const dispatch=useDispatch()
  const [state, setstate] = useState(false)
  const [prevRow, setprevRow] = useState(false)
  const [listtype, setlisttype] = useState('pending')
  const [data1, setdata1] = useState()
  const [refresh, setrefresh] = useState('')
  const [data2, setdata2] = useState()
  const [dates, setdates] = useState('')
  useFocusEffect(
    React.useCallback(() => {
         StatusBar.setBackgroundColor('#2e325a');
        //  StatusBar.setTranslucent(true) //add color code
        LogBox.ignoreAllLogs()
        apiCall()
       
    }, [refresh]),
  );
  
  const apiCall=()=>{
    try{
      axios.get(`${url}/user/task/${userId}`).then(async(data)=>{
         setdata2(data.data)
       let arr=[]
        for(let i=0;i<data.data.length;i++){
          arr.push(data.data[i].date.split('T')[0])
        }
        arr=arr.filter((item,index)=>arr.indexOf(item)===index)
         setdates(arr)
         if(!state){
          setstate(arr[0])
        }
        if(!listtype){
          setlisttype('pending')
        }
        if(listtype==='pending'){
           setdata1(data.data.filter((e)=>(e.pending===1&&e.date.split('T')[0]===state)))
        }
        else{
           setdata1(data.data.filter((e)=>(e.pending===0&&e.date.split('T')[0]===state)))
        }
      })
    }
    catch(err){
      console.log(err)
    }
  }
  
  return (
    <ScrollView style={{backgroundColor:"#2e325a",flex:1,height:"100%"}}>
        <View style={{}} >
        <FlatList 
        style={{left:10,right:20}}
        data={dates}
        horizontal={true}
        renderItem={({item})=>(
          <DateList state={state} setstate={setstate} item={item} setlisttype={setlisttype} setdata1={setdata1} data1={data1} data2={data2} listtype={listtype}
          />
        )}
        ItemSeparatorComponent={()=>(
          <View style={{width:15,justifyContent:"center",alignItems:'center'}}>
            {/* <Text style={{fontSize:50}}>|</Text> */}
          </View>
        )}
        /></View>
        <View style={{flexDirection:"row",justifyContent:'space-evenly',height:80}}>
          <TouchableOpacity onPress={async()=>{
            setlisttype('pending')
            setdata1(data2.filter((e)=>(e.pending===1&&e.date.split('T')[0]===state)))
            }} style={{display:'flex',flexDirection:"row",height:"100%",justifyContent:"center",alignItems:"center"}}>
            <View style={{padding:5,borderRadius:100,width:30,height:30,backgroundColor:"black",justifyContent:'center',alignItems:'center',borderWidth:2,borderColor:"red"}}>
              <View style={{height:20,width:20,backgroundColor:listtype==="pending"?"white":"black",borderRadius:100}}></View>
            </View>
            <View style={{justifyContent:'center',alignItems:"center",height:"100%",left:5}}>
              <Text>Pending</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={async()=>{
            setlisttype('completed')
            setdata1(data2.filter((e)=>(e.pending===0&&e.date.split('T')[0]===state)))
          
          }} style={{display:'flex',flexDirection:"row",height:"100%",justifyContent:"center",alignItems:"center"}}>
            <View style={{padding:5,borderRadius:100,width:30,height:30,backgroundColor:"black",justifyContent:'center',alignItems:'center',borderWidth:2,borderColor:"green"}}>
              <View style={{height:20,width:20,backgroundColor:listtype==="completed"?"white":"black",borderRadius:100}}></View>
            </View>
            <View style={{justifyContent:'center',alignItems:"center",height:"100%",left:5}}>
              <Text>Completed</Text>
            </View>
          </TouchableOpacity>
        </View>
        {data1?<View style={{}}>
          <FlatList
          data={data1}
          renderItem={({item})=>(<DataList id={item._id} item={item} prevRow={prevRow} setrefresh={setrefresh} setprevRow={setprevRow} />)}
          ItemSeparatorComponent={()=>(<View style={{height:20}}></View>)}
          ></FlatList>
          <View style={{height:150}}>
           </View>
        </View>:
        <View style={{justifyContent:"center",alignItems:"center"}}>
          <Text style={{color:"white",fontSize:30,fontWeight:'bold'}}>No Data to Show</Text>
        </View>}
    </ScrollView>
  )
}
