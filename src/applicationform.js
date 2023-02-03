import React from 'react';
import { StyleSheet, Text, View, TextInput,ImageBackground,TouchableOpacity, Image } from 'react-native';

export default function Appform(){
    const image = require('../assets/background.png');

    return (
        <ImageBackground style={styles.pic} source={image} resizeMode="cover" >
            <View style={styles.tc}>
                <Text style={styles.tf}>CKRuet Admission</Text>
                <Text style={styles.ts}>Application Form</Text>
            </View>
            <View style={styles.bkash}>
                <TextInput 
                placeholder='Full Name'
                style={styles.tip}/>
                <TextInput 
                placeholder='HSC Roll No.'
                keyboardType='numeric'
                style={styles.tip}/>
                <TextInput 
                placeholder='HSC Registration No.'
                keyboardType='numeric'
                style={styles.tip}/>
                <TextInput 
                placeholder='Passing Year'
                keyboardType='numeric'
                style={styles.tip}/>
                <TextInput 
                placeholder='GPA in HSC'
                keyboardType='numeric'
                style={styles.tip}/>
                <TextInput 
                placeholder='Present Address'
                style={styles.tip}/>
                <TextInput 
                placeholder='Permanent Address'
                style={styles.tip}/>
                <TouchableOpacity >
                    <Text style={styles.to1}>SUBMIT</Text>
                </TouchableOpacity>
            </View>

            
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

});