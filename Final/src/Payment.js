import {React,useState,useEffect} from 'react';
import { StyleSheet, Text, View, TextInput,ImageBackground,TouchableOpacity, Image , ScrollView} from 'react-native';
import {firebase} from '../config'
import { useNavigation } from '@react-navigation/native'
export default function Payment(){
    const navigation = useNavigation()
    const [roll, setRoll] = useState([]);
    const [ref, setRef] = useState('');
    const [amount, setAmount] = useState('');
    const [phone, setPhone] = useState('');
    const [refresh, setRefresh] = useState(false);
    const [message, setMessage] = useState('');
    const image = require('../assets/background.png');
    const imagebkash = require('../assets/bkash.png');
    const db = firebase.firestore();
    const field = 'roll';
    useEffect(()=>{
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid).get()
        .then((snapshot)=>{
          if(snapshot.exists){
            setRoll(snapshot.data().roll)
          }
          else {
            console.log('User doesnt exists')
          }
        })
      },[])
  useEffect(() => {
    if (refresh) {
      setTimeout(() => {
        setRefresh(false);
        setMessage('');
      }, 900);
    }
  }, [refresh]);
const handleSubmit = () => {
    // const db = firebase.firestore();
    // db.collection('payment').add({
    //     ref,
    //     phone,
    //     amount
    // }).then(() => {
    //     setMessage('Payment Successfull');
    //     setRefresh(true);
    //   }).then(() => {
    //     console.log('Form data added to Firestore');
    // }).catch((error) => {
    //     console.error(error);
    // });


    firebase.firestore().collection("applicant").where("roll", "==", roll).get()
  .then(querySnapshot => {
    if(querySnapshot.size>0){
    querySnapshot.forEach(documentSnapshot => {
      documentSnapshot.ref.update({
        payment: "yes"
      }).then(()=>{
        setMessage('Payment Successfull');
        setRefresh(true);
      });
    }); }
    else
    {
        setMessage('Please fill the application form first');
        setRefresh(true);

    }
  });

};




    return (
        <ImageBackground style={styles.pic} source={image} resizeMode="cover" >
        <ScrollView>
            <View style={styles.tc}>
                <Text style={styles.tf}>CKRuet Admission</Text>
                <Text style={styles.ts}>Payment</Text>
                {message !== '' && <Text style={styles.message}>{message}</Text>}
            </View>
            <View style={styles.bkash}>
            <View style={styles.whit}>
                <Image style={styles.bcov} source={imagebkash} resizeMode="cover"/>
            </View>
                <TextInput 
                placeholder='Phone no'
                style={styles.tip}
                onChangeText={setPhone}
                />
                <TextInput 
                placeholder='Amount'
                style={styles.tip}
                onChangeText={setAmount}
                />
                <TextInput 
                placeholder='Reference'
                style={styles.tip}
                onChangeText={setRef}
                />
                <TextInput 
                placeholder='Password'
                style={styles.tip}/>
                <View style={styles.ctn}>
                    <TouchableOpacity onPress={handleSubmit}>
                        <Text style={styles.to1}>Proceed</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.to2}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>

         </ScrollView>  
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    pic:{
        flex:1,
    },
    tc:{
        marginTop:60
    },
    tf:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center'
    },
    ts:{
        fontSize:23,
        fontWeight:'bold',
        textAlign:'left',
        marginTop:24,
        paddingLeft:53
    },
    bkash:{
        backgroundColor:'#e2136e',
        margin:45,
        height:365,
        paddingTop:15
    },
    bcov:{
        marginTop:20,
        width:200,
        height:50,
        marginLeft:50
    },
    tip:{
        backgroundColor:'#fff',
        marginTop:15,
        height:35,
        marginHorizontal:15,
        padding:10,
        borderRadius:2
    },
    ctn:{
        flexDirection:'row',
        marginTop:40,
    },
    to1:{
        backgroundColor:'#fff',
        marginLeft:35,
        fontSize:18,
        fontWeight:'bold',
        height:30,
        width:80,
        textAlign:'center',
        borderRadius:2
        
    },
    to2:{
        backgroundColor:'#fff',
        marginLeft:35,
        fontSize:18,
        fontWeight:'bold',
        height:30,
        width:80,
        textAlign:'center',
        textAlign:'center',
        borderRadius:2
    },
    whit:{
        backgroundColor:'#fff',
        marginHorizontal:10
    },
    message: {
        fontSize: 16,
        marginTop: 20,
        color: 'green',
      }
});