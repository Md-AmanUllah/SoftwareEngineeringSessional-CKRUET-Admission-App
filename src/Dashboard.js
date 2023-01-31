import React, { useState,useEffect } from "react";
import { useNavigation } from '@react-navigation/native'
import {firebase} from '../config'
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
  const [name,setName]=useState([])
  const [collapsed, setCollapsed] = useState({
    charts: true,
    statistics: true,
    settings: true
  });

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
        setName(snapshot.data())
      }
      else {
        console.log('User doesnt exists')
      }
    })
  },[])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome, {name.name}</Text>
      </View>
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionHeader}
        >
          <Text style={styles.sectionText}>Status</Text>
        
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionHeader}
        >
          <Text style={styles.sectionText}>Application Form</Text>
        
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionHeader}
        >
          <Text style={styles.sectionText}>Payment</Text>
        
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionHeader}
        >
          <Text style={styles.sectionText}>Published Result</Text>
        
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionHeader}
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
    backgroundColor: "#F5F5F5"
  },
  header: {
    backgroundColor: "#333",
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
