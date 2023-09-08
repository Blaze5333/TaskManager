import React ,{useState} from 'react'
import { FlatList, Text, View } from 'react-native'
import DateList from './DateList'

export default function Home() {
  const [state, setstate] = useState(false)
  const data=[1,2,3,4,5,6,7,8,9,10]
  return (
    <View style={{backgroundColor:"black", flex:1}}>
        <FlatList 
        style={{top:20,left:10,right:20}}
        data={data}
        horizontal={true}
        renderItem={({item})=>(
          <DateList state={state} setstate={setstate} item={item}/>
        )}
        ItemSeparatorComponent={()=>(
          <View style={{width:20}}></View>
        )}
        endFillColor={'pink'}
        >
        </FlatList>
    </View>
  )
}
