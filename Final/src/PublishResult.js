import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, TextInput,ImageBackground,TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {firebase} from '../config'

export default function PublishResult(){
    const im = require('../assets/background.png');
    const navigation = useNavigation();
    const [roll, setRoll] = useState('');
    const [merit, setMerit] = useState('');
    const [refresh, setRefresh] = useState(false);
    const [message, setMessage] = useState('');
    useEffect(() => {
        if (refresh) {
          setTimeout(() => {
            setRefresh(false);
            setMessage('');
          }, 900);
        }
      }, [refresh]);


      const handleSubmit = () => {
        const db = firebase.firestore();
             db.collection('result').add({
                roll,
                merit
             }).then(() => {
                 setMessage('Result Stored Successfully');
                 setRefresh(true);
                 setMerit('');
                 setRoll('');
               }).then(() => {
                 console.log('result added to Firestore');
             }).catch((error) => {
                 console.error(error);
             });
            
         };
    return (
        <ImageBackground style={styles.pic} source={im} resizeMode="cover" >
            <View style={styles.tc}>
                <Text style={styles.ts}>Publish Result</Text>
                {message !== '' && <Text style={styles.message}>{message}</Text>}
            </View>
            <View style={styles.bkash}>
                <TextInput
                value={roll} 
                placeholder='Applicant Roll'
                keyboardType='numeric'
                style={styles.tip}
                onChangeText={setRoll}
                />
                <TextInput 
                value={merit}
                placeholder='Applicant Merit'
                keyboardType='numeric'
                style={styles.tip}
                onChangeText={setMerit}/>
 
                <TouchableOpacity 
                onPress={()=>{handleSubmit()}}
                >
                    <Text style={styles.to1}>SUBMIT</Text>
                </TouchableOpacity>
            </View>

            
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    pic:{
        flex:1,
    },
    tc:{
        marginTop:20,
        textAlign:'center',
    },
    tf:{
        fontSize:30,
        fontWeight:'bold',
    },
    ts:{
        fontSize:23,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:24,
    },
    bkash:{
        marginTop:15,
        marginHorizontal:45,
    },
    tip:{
        backgroundColor:'#fff',
        marginTop:10,
        height:40,
        marginHorizontal:15,
        padding:10,
        borderRadius:10,
        fontWeight: '500',
        fontSize: 15,
    },
    to1:{
        marginTop:20,
        backgroundColor:'#00BCC9',
        color:'#FFF',
        marginLeft:35,
        fontSize:16,
        fontWeight:'bold',
        width:200,
        textAlign:'center',
        borderRadius:20,
        padding: 5
    },
    message: {
        fontSize: 16,
        marginTop: 20,
        color: 'green',
      }

});
