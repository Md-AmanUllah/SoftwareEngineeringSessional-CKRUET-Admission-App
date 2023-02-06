import React from 'react';
import { StyleSheet, Text, View, TextInput,ImageBackground,TouchableOpacity, Image } from 'react-native';

export default function Status(){
    const im = require('../assets/background.png');

    return (
        <ImageBackground style={styles.pic} source={im} resizeMode="cover" >
            <View style={styles.tc}>
                <Text style={styles.ts}>Status</Text>
            </View>
            <View style={styles.bkash}>
                <Text style={styles.to}>Your Application is Currently Pending. Please Pay 500taka though bKash Mobile Banking with Your HSC Roll as Reference.</Text>
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
    to:{
        color:'#00BCC9',
        fontSize:18,
        fontWeight:'700',
        textAlign:'center',
        padding:20,
    },

});
