import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const image = {uri: '/assets/background.png'};

export default function Status() {
  return (
    <View style={styles.statusContainer}>
      <Text style={styles.statusContainerText} >Status</Text>
      <View style={styles.statusContent}>
        <Text style={styles.statusContentText}>
            Your application is currently pending. Please pay 500 taka through bKash mobile banking with your HSC roll as reference.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    statusContainer:{
      flex:1,
      margin: 10,
      
    },
    image:{
      flex:1,
    },
    statusContainerText:{
      fontSize: 20,
      fontWeight: 500,
    },
    statusContent:{
        marginTop: 20,
    },
    statusContentText:{
      fontSize: 17,
      fontWeight: 400,  
    }
})