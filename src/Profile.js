import React,{useState} from 'react'
import {View,Text,TextInput,Image,StatusBar, TouchableOpacity} from 'react-native'
import {useFocusEffect} from '@react-navigation/native';
import { BarChart } from 'react-native-gifted-charts';
import Pie from 'react-native-pie'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { url } from '../credentials';

export default function Profile({route,navigation}) {
  const [date, setdate] = useState(new Date(route.params.dob))
  const [data, setdata] = useState([])
  const monthInitials = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  console.log(date)
  
  useFocusEffect(
    React.useCallback(() => {
      let barData=[];
        ; // 'light-content' is also available
         StatusBar.setBackgroundColor('#db222a'); //add color code
         console.log('details',route.params)
         axios.get(`${url}/user/task/${route.params._id}`).then((data)=>{
              let arr=[]
              for(let i=0;i<data.data.length;i++){
                arr.push(new Date(data.data[i].date).getMonth())
              }
              arr=arr.filter((item,index)=>arr.indexOf(item)===index)
              let arr2=[]
              for(let i=0;i<arr.length;i++){
                let d={
                  date:arr[i],
                  pending:0,
                  completed:0
                }
                for(let j=0;j<data.data.length;j++){
                  if(arr[i]==new Date(data.data[j].date).getMonth()){
                     if(data.data[j].pending===1){
                      d={...d,pending:d.pending+1}
                     }
                     else{
                      d={...d,completed:d.completed+1}
                     }
                  }
                }
                arr2.push(d)
                console.log(arr2)
              }
              for(let i=0;i<arr2.length;i++){
                let e=arr2[i]
               barData.push(
                {
                  value:((e.completed)/(e.completed+e.pending))*100,
                  label: monthInitials[e.date],
                  spacing: 2,
                  labelWidth: 30,
                  labelTextStyle: {color: 'gray'},
                  frontColor: '#177AD5',
                })
                barData.push(
                {value: ((e.pending)/(e.completed+e.pending))*100, frontColor: '#ED6665'})
              }  
              setdata(barData)
         })
        
    },[]),
  );

   
  return (
   <View style={{flex:1,backgroundColor:'#2e325a'}}>
   <View style={{height:"20%", width:"100%", justifyContent:'center',alignItems:'center',backgroundColor:"#db222a",top:0,flexDirection:'row',borderBottomEndRadius:30,borderBottomStartRadius:30}}>
   {route.params&&<View style={{width:'40%',justifyContent:"center",alignItems:'center',left:0}}>
    <Image style={{height:150,width:150,borderRadius:100}} source={{uri:route.params.imageUrl?route.params.imageUrl:""}}></Image>
   </View>}
   <View style={{width:"60%",justifyContent:"center",alignItems:'center'}}>
  <View style={{width:"100%",justifyContent:"flex-start",alignItems:'flex-end',height:"40%",paddingRight:10}}>
     <TouchableOpacity onPress={async()=>{
      await AsyncStorage.setItem('user','')
      navigation.navigate('login')
      
      }}>
      <Image style={{height:35,width:35}} source={require('./assets/icons/icons8-logout-50.png')}></Image>
     </TouchableOpacity>
   </View>
   <View style={{width:"90%",height:"60%",alignItems:"flex-start"}}>
     <Text style={{color:"white",fontSize:25,fontWeight:"bold"}}>{route.params?.name}</Text>
     <Text style={{color:"white",fontSize:20}}>Student</Text>
     </View>
   </View>
   </View>
   <View style={{height:'35%',padding:15,justifyContent:"space-evenly",width:"100%",backgroundColor:'#2e325a'}}>
   <View style={{}}>
   <TextInput editable={false} value={route.params?.name} inlineImageLeft='person' style={{backgroundColor:"rgba(52, 52, 52, 0.8)",width:"100%",height:40,borderRadius:10,color:'white',fontSize:15,fontWeight:'bold'}}></TextInput>
   </View>
   <View style={{}}>
   <TextInput editable={false} value={route.params?.email} inlineImageLeft='email' style={{backgroundColor:"rgba(52, 52, 52, 0.8)",width:"100%",height:40,borderRadius:10,color:'white',fontSize:15,fontWeight:'bold'}} inlineImagePadding={20}></TextInput>
   </View>
   <View style={{}}>
   <TextInput editable={false} value={date?(date.getDate()+"/"+ (+date.getMonth()+1<10?'0'+(+date.getMonth()+1):date.getMonth()+1)+"/"+date.getFullYear()):''} inlineImageLeft='dob' style={{backgroundColor:"rgba(52, 52, 52, 0.8)",width:"100%",height:40,borderRadius:10,color:'white',fontSize:15,fontWeight:'bold'}} inlineImagePadding={20}></TextInput>
   </View>
   <View style={{}}>
   <TextInput editable={false} value={route.params?.phone} inlineImageLeft='phone' style={{backgroundColor:"rgba(52, 52, 52, 0.8)",width:"100%",height:40,borderRadius:10,color:'white',fontSize:15,fontWeight:'bold'}}></TextInput>
   </View> 
   </View> 
   <View style={{height:"45%",bottom:"2%",paddingLeft:5,backgroundColor:"#2e325a"}}>
   <View style={{marginVertical: 1}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 10,
                backgroundColor: 'yellow',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    height: 12,
                    width: 12,
                    borderRadius: 6,
                    backgroundColor: '#177AD5',
                    marginRight: 8,
                  }}
                />
                <Text
                  style={{
                    height: 20,
                    color: 'lightgray',
                  }}>
                 Task Completed
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    height: 12,
                    width: 12,
                    borderRadius: 6,
                    backgroundColor: '#ED6665',
                    marginRight: 8,
                  }}
                />
                <Text
                  style={{
                    // width: 60,
                    height: 20,
                    color: 'lightgray',
                  }}>
                  Task Pending
                </Text>
              </View>
            </View>
          </View>
  {data.length>0&&<BarChart
          data={data}
          barWidth={10}
          spacing={20}
          roundedTop
          roundedBottom
          hideRules
          xAxisThickness={0}
          yAxisThickness={0}
          yAxisTextStyle={{color: 'white'}}
        
          noOfSections={4}
          maxValue={100}
        />}
        </View>
 
   </View> 
  )
}
