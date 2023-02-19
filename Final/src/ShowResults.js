import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity,StyleSheet,ImageBackground,ScrollView} from 'react-native';
import {firebase} from '../config';
import { Table, Row, Rows } from 'react-native-table-component';
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

export default function ShowResults() {
  const [tableHead, setTableHead] = useState(['Roll', 'Merit','Delete']);
  const [tableData, setTableData] = useState([]);
  const image = require('../assets/background.png');

  useEffect(() => {
    const subscriber = firebase.firestore()
      .collection('result')
      .onSnapshot((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((documentSnapshot) => {
          const docData = documentSnapshot.data();
          const row = [
            docData.roll,
            docData.merit,
            <TouchableOpacity onPress={() => handleDelete(documentSnapshot.id)} style={{alignSelf:'center'}}>
               <FontAwesome5 name="trash" size={20} color="#2596be"/>
            </TouchableOpacity>
          ];
          data.push(row);
        });
        setTableData(data);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  const handleDelete = (id) => {
    firebase.firestore().collection('result').doc(id).delete();
  };

  return (
    <ImageBackground style={styles.pic} source={image} resizeMode="cover" >
    <View style={{ flex: 1, padding: 16, paddingTop: 30 }}>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row data={tableHead} style={{ height: 60, backgroundColor: '#f1f8ff' }} textStyle={{ margin: 4 ,textAlign:'center'}}  />
        <Rows data={tableData} textStyle={{ margin: 6 ,textAlign:'center'}}  />
      </Table>
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
    },
    tf:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
    },
    ts:{
        fontSize:23,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:30,
        // paddingLeft:53
    },
    tab:{
        marginTop:25,
        marginHorizontal:15,
    },
    text:{
        textAlign:'center',
    },
    row:{
        height:38,
    }

});
