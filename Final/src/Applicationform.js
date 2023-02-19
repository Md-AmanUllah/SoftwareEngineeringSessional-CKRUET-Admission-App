import {React,useState,useEffect} from 'react';
import { StyleSheet, Text, View, TextInput,ImageBackground,TouchableOpacity, Image,ScrollView } from 'react-native';
import {firebase} from '../config'
export default function Appform(){
    const image = require('../assets/background.png');
    const [name, setName] = useState('');
    const [roll, setRoll] = useState('');
    const [regno, setRegno] = useState('');
    const [passingyear, setPassingyear] = useState('');
    const [gpa, setGpa] = useState('');
    const [presentadd, setPresentadd] = useState('');
    const [Permanentadd, setPermanentadd] = useState('');
    const [refresh, setRefresh] = useState(false);
    const [message, setMessage] = useState('');
    const payment = 'no';
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
        db.collection('applicant').add({
            name,
            roll,
            regno,
            passingyear,
            gpa,
            presentadd,
            Permanentadd,
            payment
        }).then(() => {
            setMessage('Application Submitted Successfully');
            setRefresh(true);
          }).then(() => {
            console.log('Form data added to Firestore');
        }).catch((error) => {
            console.error(error);
        });
       
    };

    return (
        <ImageBackground style={styles.pic} source={image} resizeMode="cover" >
        <ScrollView>
            <View style={styles.tc}>
                <Text style={styles.tf}>CKRuet Admission</Text>
                <Text style={styles.ts}>Application Form</Text>
                {message !== '' && <Text style={styles.message}>{message}</Text>}
            </View>
            <View style={styles.bkash}>
                <TextInput 
                placeholder='Full Name'
                style={styles.tip}
                onChangeText={setName}
                />
                <TextInput 
                placeholder='HSC Roll No.'
                keyboardType='numeric'
                style={styles.tip}
                onChangeText={setRoll}
                />
                <TextInput 
                placeholder='HSC Registration No.'
                keyboardType='numeric'
                style={styles.tip}
                onChangeText={setRegno}
                />
                <TextInput 
                placeholder='Passing Year'
                keyboardType='numeric'
                style={styles.tip}
                onChangeText={setPassingyear}
                />
                <TextInput 
                placeholder='GPA in HSC'
                keyboardType='numeric'
                style={styles.tip}
                onChangeText={setGpa}
                />
                <TextInput 
                placeholder='Present Address'
                style={styles.tip}
                onChangeText={setPresentadd}
                />
                <TextInput 
                placeholder='Permanent Address'
                style={styles.tip}
                onChangeText={setPermanentadd}
                />
                <TouchableOpacity onPress={handleSubmit}>
                    <Text style={styles.to1}>SUBMIT</Text>
                </TouchableOpacity>
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
        marginTop:15,
        marginHorizontal:45,
    },
    tip:{
        backgroundColor:'#fff',
        marginTop:10,
        height:40,
        marginHorizontal:15,
        padding:10,
        borderRadius:2
    },
    to1:{
        marginTop:20,
        backgroundColor:'cyan',
        color:'grey',
        marginLeft:35,
        fontSize:18,
        fontWeight:'bold',
        height:30,
        width:200,
        textAlign:'center',
        borderRadius:5
        
    },
    message: {
        fontSize: 16,
        marginTop: 20,
        color: 'green',
      }

});