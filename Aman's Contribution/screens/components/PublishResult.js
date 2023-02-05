import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React from 'react';

export default function PublishResult(){
  return (
    <View style={styles.publishResultContainer}>
      <Text style={styles.publishResultMainHeader}>CKRUET Admission</Text>
      <Text style={styles.publishResultHeader}>Publish Result</Text>
      
      <TextInput style={styles.publishResultText} placeholder='Applicant Name'></TextInput>
      <TextInput style={styles.publishResultText} placeholder='Applicant Roll'></TextInput>
      <TextInput style={styles.publishResultText} placeholder='Applicant Merit'></TextInput>
    
      <Button style={styles.publishResultBtn} title='Submit'></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    publishResultContainer:{
        
    },
    publishResultMainHeader:{
       fontSize: 20,
       fontWeight: 700,
       textAlign: 'center',
       margin: 5,
    },
    publishResultHeader:{
      fontSize: 17,
      fontWeight: 400,
      textAlign: 'center',
      margin: 10,
    },
    publishResultText:{
      backgroundColor: `#f0ffff`,
      borderRadius: 10,
      textAlign: 'center',
      margin: 10,
      padding: 10,
      fontSize: 17,
      fontWeight: 400,
    },
    publishResultBtn:{
        width: 150,
        borderRadius: 15,
        margin: 20,
        fontSize: 100,
    }

})
