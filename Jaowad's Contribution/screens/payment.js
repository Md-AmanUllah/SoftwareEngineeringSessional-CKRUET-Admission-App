import React from 'react';
import { StyleSheet, Text, View, TextInput,ImageBackground,TouchableOpacity, Image } from 'react-native';

export default function Payment(){

    // const image = {uri: 'https://reactjs.org/logo-og.png'};

    const image = require('../assets/background.png');
    const imagebkash = require('../assets/bkash.png');

    return (
        <ImageBackground style={styles.pic} source={image} resizeMode="cover" >
            <View style={styles.tc}>
                <Text style={styles.tf}>CKRuet Admission</Text>
                <Text style={styles.ts}>Payment</Text>
            </View>
            <View style={styles.bkash}>
            <View style={styles.whit}>
                <Image style={styles.bcov} source={imagebkash} resizeMode="cover"/>
            </View>
                <TextInput 
                placeholder='Phone no'
                style={styles.tip}/>
                <TextInput 
                placeholder='Amount'
                style={styles.tip}/>
                <TextInput 
                placeholder='Reference'
                style={styles.tip}/>
                <TextInput 
                placeholder='Password'
                style={styles.tip}/>
                <View style={styles.ctn}>
                    <TouchableOpacity >
                        <Text style={styles.to1}>Proceed</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.to2}>Close</Text>
                    </TouchableOpacity>
                </View>
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
        backgroundColor:'#e2136e',
        margin:45,
        height:365,
        paddingTop:15
    },
    bcov:{
        marginTop:20,
        width:200,
        height:50,
        marginLeft:50
    },
    tip:{
        backgroundColor:'#fff',
        marginTop:15,
        height:35,
        marginHorizontal:15,
        padding:10,
        borderRadius:2
    },
    ctn:{
        flexDirection:'row',
        marginTop:40,
    },
    to1:{
        backgroundColor:'#fff',
        marginLeft:35,
        fontSize:18,
        fontWeight:'bold',
        height:30,
        width:80,
        textAlign:'center',
        borderRadius:2
        
    },
    to2:{
        backgroundColor:'#fff',
        marginLeft:35,
        fontSize:18,
        fontWeight:'bold',
        height:30,
        width:80,
        textAlign:'center',
        textAlign:'center',
        borderRadius:2
    },
    whit:{
        backgroundColor:'#fff',
        marginHorizontal:10
    }
});