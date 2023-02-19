import React, { useState,useEffect } from "react";
import { useNavigation } from '@react-navigation/native'
import {firebase} from '../config'
import {printToFileAsync}  from "expo-print";
import {shareAsync} from "expo-sharing";
import { Alert } from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Dashboard = () => {
  const navigation = useNavigation()
  const [name,setName]=useState('')
  const [roll,setRoll]=useState('')
  const [regno, setRegno] = useState('');
  const [passingyear, setPassingyear] = useState('');
  const [gpa, setGpa] = useState('');
  const [presentadd, setPresentadd] = useState('');
  const [Permanentadd, setPermanentadd] = useState('');
  const [resultalert,setResultalert]=useState('No result Found!');
  const [collapsed, setCollapsed] = useState({
    charts: true,
    statistics: true,
    settings: true
  });

  const handledownload = async()=>{
    firebase.firestore().collection("applicant").where("roll", "==", roll).get()
        .then(querySnapshot => {
          if(querySnapshot.size>0){
          querySnapshot.forEach(documentSnapshot => {
            setRegno(documentSnapshot.data().regno);
            setPassingyear(documentSnapshot.data().passingyear);
            setGpa(documentSnapshot.data().gpa);
            setPresentadd(documentSnapshot.data().presentadd);
            setPermanentadd(documentSnapshot.data().Permanentadd);
          
          }); }
        });
        const htmlContent = `
        <html>
          <body>
            <h1>Admit Card</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>HSC Roll:</strong> ${roll}</p>
            <p><strong>HSC Registration No:</strong> ${regno}</p>
            <p><strong>Passing Year:</strong> ${passingyear}</p>
            <p><strong>HSC GPA:</strong> ${gpa}</p>
            <p><strong>Current Address:</strong> ${presentadd}</p>
            <p><strong>Permanent Address:</strong> ${Permanentadd}</p>
          </body>
        </html>
      `;
     const file = await printToFileAsync({
        html:htmlContent,
        base64:false
     });
     await shareAsync(file.uri);
      }

  

  const toggleCollapse = (section) => {
    setCollapsed({
      ...collapsed,
      [section]: !collapsed[section]
    });
  };
  useEffect(()=>{
    firebase.firestore().collection('users')
    .doc(firebase.auth().currentUser.uid).get()
    .then((snapshot)=>{
      if(snapshot.exists){
        setName(snapshot.data().name)
        setRoll(snapshot.data().roll)
      }
      else {
        console.log('User doesnt exists')
      }
    })
  },[])
  //to check result
  useEffect(()=>{
    const fetchData = async () => {
    await firebase.firestore().collection("result").where("roll", "==", roll).get()
    .then(querySnapshot => {
      if(querySnapshot.size>0){
      querySnapshot.forEach(documentSnapshot => {
      setResultalert(`Congratulations! Your merit is : ${documentSnapshot.data().merit}`)
      }); }
     
    });
  }
  fetchData();
  },[roll])
//handle result
const handleresult = ()=>{
  Alert.alert(
    'Result:',
    resultalert,
    [
      { text: 'OK', onPress: () => console.log('OK Pressed') }
    ],
    { cancelable: true }
  );

}




  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome, {name}</Text>
      </View>
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={()=>navigation.navigate('Status')}
        >
          <Text style={styles.sectionText}>Status</Text>
        
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={()=>navigation.navigate('Appform')}
        >
          <Text style={styles.sectionText}>Application Form</Text>
        
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={()=>navigation.navigate('Payment')}
        >
          <Text style={styles.sectionText}>Payment</Text>
        
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={()=>handleresult()}
        >
          <Text style={styles.sectionText}>Published Result</Text>
        
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={()=>navigation.navigate('SubjectChoice')}
          
        >
          <Text style={styles.sectionText}>Subject Choice</Text>
        
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={()=>handledownload()}
        >
          <Text style={styles.sectionText}>Admit Card Download</Text>
        
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={()=> {firebase.auth().signOut()}}
        >
          <Text style={styles.sectionText}>Logout</Text>
        
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#00BCC9",
    padding: 20,
    alignItems: "center"
  },
  headerText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold"
  },
  section: {
    backgroundColor: "#FFF",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  },
  sectionText: {
    color: "#00BCC9",
    fontSize: 18,
    fontWeight: "bold"
  },
  sectionBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  card: {
    backgroundColor: "#DDD",
    width: 150,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 10
  },
  cardText: {
    fontSize: 14,
    marginTop: 10
  }
});

export default Dashboard;
