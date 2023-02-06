import { View, Text,TouchableOpacity,TextInput,StyleSheet, ImageBackground} from 'react-native'
import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';

import background from "../assets/background.png";

const Registration = () => {
  const im = require("../assets/background.png");
  const navigation = useNavigation();
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')
  const [roll,setRoll]=useState('')

    return(
    <ImageBackground 
        source={im}
        style={{ flex: 1,
          width: null,
          height: null,
          }}
      >

      <View style={styles.container}>
      <Text style={{fontWeight:'bold',fontSize:26,textAlign:'center'}}>Register</Text>
      <View style={{marginTop:10}}>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        onChangeText={(email)=> setEmail(email)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Name"
        onChangeText={(name)=> setName(name)}
        autoCapitalize="none"
        autoCorrect={false}
      />
            <TextInput
        style={styles.textInput}
        placeholder="HSC Roll"
        onChangeText={(roll)=> setRoll(roll)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        onChangeText={(password)=> setPassword(password)}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
      />
    </View>
    <TouchableOpacity
      onPress={()=>navigation.navigate('Home')}
      style={styles.button}
    >
    <Text style={{fontWeight:'bold',fontSize:22}}>Register</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={()=>navigation.navigate('LogIn')}
      style={{marginTop:20}}
    >
    <Text style={{fontWeight:'bold',fontSize:16,textAlign:'center',marginTop:20}}>
      Already have an account? Login Now
    </Text>
    </TouchableOpacity>
    </View>
    </ImageBackground>
  )
}

export default Registration;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
  },
  textInput:{
    paddingTop:20,
    paddingBottom:10,
    width:400,
    fontSize:20,
    borderBottomWidth:1,
    borderBottomColor:'#000',
    marginBottom:10,
    textAlign:'center',
    alignSelf:'center'
  },
  button:{
    marginTop:10,
    height:50,
    width:250,
    backgroundColor:'#00BCC9',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    borderRadius:50,
  }
})
    