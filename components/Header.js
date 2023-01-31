import { View, Text } from 'react-native'
import React from 'react'

const Header = (props) => {
  return (
    <View style={{marginLeft:50,marginBottom:40}}>
      <Text style={{fontWeight:'bold',fontSize:28,textAlign:'center'}}>{props.name}</Text>
    </View>
  )
}

export default Header