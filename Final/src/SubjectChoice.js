import {React,useState,useEffect} from 'react';
import { StyleSheet, Text, View, TextInput,ImageBackground,TouchableOpacity, Image,FlatList,KeyboardAvoidingView } from 'react-native';
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config';


export default function SubjectChoice(){

  const [todo, setTodo] = useState('');
  const [list, setList] = useState([]);
  const [roll, setRoll] = useState('');
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
  useEffect(()=>{
    const fetchData = async () => {
    await firebase.firestore().collection("subject").where("roll", "==", roll).get()
    .then(querySnapshot => {
      if(querySnapshot.size>0){
      querySnapshot.forEach(documentSnapshot => {
      setList(documentSnapshot.data().list)
      }); }
     
    });
  }
  fetchData();
  },[roll])
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
  const handleSubmit = () => {
    setList([...list, todo]);
    setTodo('');
  };
  const handleDelete = (item) => {
    const newList = list.filter((value) => value !== item);
    setList(newList);
  };
  const handleStore = () => {
    const db = firebase.firestore();
        db.collection('subject').add({
            list,
            roll
        }).then(() => {
            setMessage('Subject Choice Submitted Successfully');
            setRefresh(true);
          }).then(() => {
            console.log('Subject choice added to Firestore');
        }).catch((error) => {
            console.error(error);
        });
  };
    const im = require('../assets/background.png');
    const navigation = useNavigation();

    return (
        <ImageBackground style={styles.pic} source={im} resizeMode="cover" >
            <View style={styles.tc}>
                <Text style={styles.ts}>SubjectChoice</Text>
                {message !== '' && <Text style={styles.message}>{message}</Text>}
            </View>
            
            <View style={styles.subjectChoiceContainer}>

            <FlatList
        data={list}
        renderItem={({ item }) => (
          <View style={styles.subjectChoiceContent}>
          <View style={styles.sCCLeft}>
            <Text style={styles.subjectChoiceContentText}>{item}</Text>
            </View>
            <View style={styles.sCCRight}>
            <TouchableOpacity
            onPress={() => handleDelete(item)}
            >
            <FontAwesome5 name="trash" size={24} color="#FFF" />
            </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item}
      />
      </View>
               
            
            <TextInput
        placeholder="Add a Subject in the format 'University Dept'"
        value={todo}
        onChangeText={(text) => setTodo(text)}
        style={styles.tip}
      />
   
            <TouchableOpacity
               onPress={handleSubmit}
                style={styles.button}
              >
              <Text style={{fontWeight:'bold',fontSize:22,color:'#FFF'}}>Add More</Text>
              </TouchableOpacity>
              <TouchableOpacity
               onPress={handleStore}
                style={styles.button}
              >
              <Text style={{fontWeight:'bold',fontSize:22,color:'#FFF'}}>Submit</Text>
              </TouchableOpacity>
              
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
    subjectChoiceContainer:{
        margin:20,
    },
    subjectChoiceContent:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#00BCC9',
        padding: 10,
        margin: 5,
        borderRadius: 12,
    },
    subjectChoiceContentText:{
        fontSize: 17,
        fontWeight:'500',
        color:'#FFF',
    },
    button:{
      marginTop:10,
      height:50,
      width:250,
      color:'#FFF',
      backgroundColor:'#E99265',
      alignItems:'center',
      justifyContent:'center',
      alignSelf:'center',
      borderRadius:50,
    },tip:{
      backgroundColor:'#fff',
      marginTop:10,
      height:40,
      marginHorizontal:15,
      padding:10,
      borderRadius:2
  },
  message: {
    fontSize: 16,
    marginTop: 20,
    color: 'green',
  }

});

