import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SubjectChoice() {
  return (
    <View style={styles.subjectChoiceContainer}>
      <Text style={styles.subjectChoiceContainerText}>SubjectChoice</Text>
      <View style={styles.subjectChoiceContent}>
        <Text style={styles.subjectChoiceContentText}>1. CUET CSE</Text>
        <Text style={styles.subjectChoiceContentText}>2. KUET CSE</Text>
        <Text style={styles.subjectChoiceContentText}>3. CUET EEE</Text>
        <Text style={styles.subjectChoiceContentText}>4. KUET EEE</Text>
        <Text style={styles.subjectChoiceContentText}>5. RUET CSE</Text>
        <Text style={styles.subjectChoiceContentText}>6. CUET ME</Text>
        <Text style={styles.subjectChoiceContentText}>7. CUET CE</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    subjectChoiceContainer:{
      margin: 20,
    },
    subjectChoiceContainerText:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 700,
    },
    subjectChoiceContent:{
      marginTop: 10,
    },
    subjectChoiceContentText:{
      backgroundColor: `#f0ffff`,
      margin: 10,
      borderRadius: 15,
      padding: 10,
      fontSize: 15,
      fontWeight: 500,
    }
})