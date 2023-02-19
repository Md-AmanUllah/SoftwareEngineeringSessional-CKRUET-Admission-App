import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity,StyleSheet,ImageBackground,ScrollView} from 'react-native';
import {firebase} from '../config';
import { Table, Row, Rows } from 'react-native-table-component';

export default function ProcessApplication() {
  const widthArr = [60, 80, 50, 70,70];
  const [tableHead, setTableHead] = useState(['Roll', 'Name', 'GPA', 'Payment','Accept/Reject']);
  const [tableData, setTableData] = useState([]);
  const image = require('../assets/background.png');

  useEffect(() => {
    const subscriber = firebase.firestore()
      .collection('applicant')
      .onSnapshot((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((documentSnapshot) => {
          const docData = documentSnapshot.data();
          const row = [
            docData.roll,
            docData.name,
            docData.gpa,
            docData.payment,
            <TouchableOpacity onPress={() => handleDelete(documentSnapshot.id)} testID='Reject' >
              <Text style={{textAlign:'center'}}>Reject</Text>
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
    firebase.firestore().collection('applicant').doc(id).delete();
  };

  return (
    <ImageBackground style={styles.pic} source={image} resizeMode="cover" >
    <View style={{ flex: 1, padding: 16, paddingTop: 30 }}>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row data={tableHead} style={{ height: 60, backgroundColor: '#f1f8ff' }} textStyle={{ margin: 4 ,textAlign:'center'}}  widthArr={widthArr} />
        <Rows data={tableData} textStyle={{ margin: 6 ,textAlign:'center'}}  widthArr={widthArr}/>
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
