import React from 'react'
import {View,Text,TextInput,Image,StatusBar} from 'react-native'
import {useFocusEffect} from '@react-navigation/native';
import { BarChart } from 'react-native-gifted-charts';
import Pie from 'react-native-pie'
export default function Profile() {
  useFocusEffect(
    React.useCallback(() => {
        ; // 'light-content' is also available
         StatusBar.setBackgroundColor('#db222a'); //add color code
        
    }, []),
  );
  const barData = [
    {
      value: 40,
      label: 'Jan',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#177AD5',
    },
    {value: 20, frontColor: '#ED6665'},
    {
      value: 50,
      label: 'Feb',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#177AD5',
    },
    {value: 40, frontColor: '#ED6665'},
    {
      value: 75,
      label: 'Mar',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#177AD5',
    },
    {value: 25, frontColor: '#ED6665'},
    {
      value: 30,
      label: 'Apr',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#177AD5',
    },
    {value: 20, frontColor: '#ED6665'},
    {
      value: 60,
      label: 'May',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#177AD5',
    },
    {value: 40, frontColor: '#ED6665'},
    {
      value: 65,
      label: 'Jun',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#177AD5',
    },
    {value: 30, frontColor: '#ED6665'},
  ];
  return (
   <View style={{flex:1,backgroundColor:'black'}}>
   <View style={{height:"20%", width:"100%", justifyContent:'center',alignItems:'center',backgroundColor:"#db222a",top:0,flexDirection:'row'}}>
   <View style={{width:'40%',justifyContent:"center",alignItems:'center',left:0}}>
    <Image style={{height:150,width:150,borderRadius:100}} source={require('./assets/icons/mustafa2.jpeg')}></Image>
   </View>
   <View style={{width:"60%",justifyContent:"center",alignItems:'center'}}>
     <Text style={{color:"white",fontSize:25,fontWeight:"bold"}}>Mustafa Chaiwala</Text>
     <Text style={{color:"white",fontSize:20}}>Student</Text>
   </View>
   </View>
   <View style={{height:'35%',padding:15,justifyContent:"space-evenly",width:"100%"}}>
   <View style={{}}>
   <TextInput editable={false} value='Mustafa Chaiwala' inlineImageLeft='person' style={{backgroundColor:"rgba(52, 52, 52, 0.8)",width:"100%",height:40,borderRadius:10,color:'white',fontSize:15,fontWeight:'bold'}}></TextInput>
   </View>
   <View style={{}}>
   <TextInput editable={false} value='mustafachaiwala2003@gmail.com' inlineImageLeft='email' style={{backgroundColor:"rgba(52, 52, 52, 0.8)",width:"100%",height:40,borderRadius:10,color:'white',fontSize:15,fontWeight:'bold'}} inlineImagePadding={20}></TextInput>
   </View>
   <View style={{}}>
   <TextInput editable={false} value='21/11/2003' inlineImageLeft='dob' style={{backgroundColor:"rgba(52, 52, 52, 0.8)",width:"100%",height:40,borderRadius:10,color:'white',fontSize:15,fontWeight:'bold'}} inlineImagePadding={20}></TextInput>
   </View>
   <View style={{}}>
   <TextInput editable={false} value='+91 8017592975' inlineImageLeft='phone' style={{backgroundColor:"rgba(52, 52, 52, 0.8)",width:"100%",height:40,borderRadius:10,color:'white',fontSize:15,fontWeight:'bold'}}></TextInput>
   </View> 
   </View> 
   <View style={{height:"45%",bottom:"2%",paddingLeft:5}}>
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
   <BarChart
          data={barData}
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
        />
        </View>
 
   </View> 
  )
}
