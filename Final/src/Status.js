import {React,useState,useEffect} from 'react';
import { StyleSheet, Text, View, TextInput,ImageBackground,TouchableOpacity, Image } from 'react-native';
import { firebase } from '../config';
export default function Status(){
    const im = require('../assets/background.png');
    const [status, setStatus] = useState('Please Fill up the Application Form');
    const [roll,setRoll]=useState('');
    const [formfillupstatus,setFormfillupstatus]=useState('No');
    const [paymentstatus,setPaymentstatus]=useState('No');
    const [refresh, setRefresh] = useState(false);
    useEffect(()=>{
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid).get()
        .then((snapshot)=>{
          if(snapshot.exists){
            setRoll(snapshot.data().roll)
            console.log(snapshot.data().roll)
          }
          else {
            console.log('User doesnt exists')
          }
        })
      },[])

      useEffect(()=>{
        const fetchData = async () => {
        await firebase.firestore().collection("applicant").where("roll", "==", roll).get()
        .then(querySnapshot => {
          if(querySnapshot.size>0){
          setFormfillupstatus('Yes');
          querySnapshot.forEach(documentSnapshot => {
          if(documentSnapshot.data().payment=="yes")
          {
            setStatus('Please wait for the result to be published')
            setPaymentstatus('Yes')
            console.log('passsed')
          }
          else{
            setStatus('Please Pay taka 500 through bkash with your roll as reference')
            console.log('passsed')
          }
          }); }
         
        });
      }
      fetchData();
      },[roll])
  

///////////////




    return (
        <ImageBackground style={styles.pic} source={im} resizeMode="cover" >
            <View style={styles.tc}>
                <Text style={styles.ts}>Status</Text>
            </View>
            <View style={styles.bkash}>
                <Text style={styles.to}>Form Fillup Done? : {formfillupstatus}</Text>
            </View>
            <View style={styles.bkash}>
                <Text style={styles.to}>Payment Done? : {paymentstatus}</Text>
            </View>
            <View style={styles.bkash}>
                <Text style={styles.to}>{status}</Text>
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
    to:{
        color:'#00BCC9',
        fontSize:18,
        fontWeight:'700',
        textAlign:'center',
        padding:20,
    },

});
