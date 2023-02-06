import { View, Text,TouchableOpacity,TextInput,StyleSheet,ImageBackground } from 'react-native'
import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';

import background from "../assets/background.png";

const LogIn = () => {
  const im = require("../assets/background.png");
  const navigation = useNavigation();
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  loginUser = async (email,password)=>{
    try{
      await firebase.auth().signInWithEmailAndPassword(email,password)
    } catch(error){
      alert(error.message)
    }
  }
  //forget password
  const forgetPassword = ()=>{
    firebase.auth().sendPasswordResetEmail(email)
    .then(()=>{
      alert("Password reset mail is sent!")
    }).catch((error)=>{
      alert(error)
    })
  }


  return (
    <ImageBackground 
    source={im}
    style={{ flex: 1,
      width: null,
      height: null,
      }}
  >
    <View style={styles.container}>
       
      <Text style={{fontWeight:'bold',fontSize:26,textAlign:'center',marginTop:20}}>Login</Text>
      <View style={{marginTop:40}}>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        onChangeText={(email)=> setEmail(email)}
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
      onPress={()=>navigation.navigate('DashBoard')}
      style={styles.button}
    >
    <Text style={{fontWeight:'bold',fontSize:22}}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={()=>forgetPassword()}
      style={{marginTop:20}}
    >
    <Text style={{fontWeight:'bold',fontSize:16,textAlign:'center'}}>
      Forgot Password
    </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={()=>navigation.navigate('Registration')}
      style={{marginTop:20}}
    >
    <Text style={{fontWeight:'bold',fontSize:16,textAlign:'center'}}>
      Don't have an account? Register Now
    </Text>
    </TouchableOpacity>
   
    </View>
    </ImageBackground>
  )
}

export default LogIn;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginTop:50,
  },
  image: {
    flex: 1,
  width: null,
  height: null,
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
    marginTop:30,
    height:70,
    width:250,
    fontColor: '#000000',
    backgroundColor:'#00BCC9',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    borderRadius:50,
  }
})