import { View, Text,TouchableOpacity,TextInput,StyleSheet } from 'react-native'
import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/native'
import {firebase} from '../config'

const Registration = () => {
  const navigation = useNavigation()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')
  const [roll,setRoll]=useState('')
  registerUser = async (email,password,name,roll)=>{
      await firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(()=>{
        firebase.auth().currentUser.sendEmailVerification().then(()=>{
          alert('varification email sent')
        }).catch((error)=>{
          alert(error.message)
        }).then(()=>{
          firebase.firestore().collection('users')
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            roll,
            email,

          })
        })
        .catch((error)=>{
          alert(error.message)
        })
      })
    
    }

    return(
      <View stytle={styles.container}>
      <Text style={{fontWeight:'bold',fontSize:26,textAlign:'center'}}>Register</Text>
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
      onPress={()=>registerUser(email,password,name,roll)}
      style={styles.button}
    >
    <Text style={{fontWeight:'bold',fontSize:22}}>Register</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={()=>navigation.navigate('Login')}
      style={{marginTop:20}}
    >
    <Text style={{fontWeight:'bold',fontSize:16,textAlign:'center',marginTop:50}}>
      Already have an account? Login Now
    </Text>
    </TouchableOpacity>
    </View>
  )
}

export default Registration

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginTop:100,
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
    backgroundColor:'#026efd',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    borderRadius:50,
  }
})
    





  