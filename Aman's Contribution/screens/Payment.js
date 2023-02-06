import React from 'react';
import { StyleSheet, Text, View, TextInput,ImageBackground,TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Payment(){

    // const image = {uri: 'https://reactjs.org/logo-og.png'};

    const im = require('../assets/background.png');
    const imb = require('../assets/Bkash-logo.jpg');
    const navigation = useNavigation();

    return (
        <ImageBackground style={styles.pic} source={im} resizeMode="cover" >
        <View style={styles.tc}>
            <Text style={styles.ts}>Payment</Text>
        </View>
        <View style={styles.bkash}>
        <View style={styles.whit}>
            <Image style={styles.bcov} source={imb} resizeMode="cover"/>
        </View>
            <TextInput 
            placeholder='Phone No'
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
                <TouchableOpacity 
                    onPress={()=>navigation.navigate('Home')}
                >
                    <Text style={styles.to}>Proceed</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('Home')}
                >
                    <Text style={styles.to}>Close</Text>
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
        marginTop:15,
    },
    tf:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center'
    },
    ts:{
        fontSize:23,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:24,
    },
    bkash:{
        backgroundColor:'#e2136e',
        margin:20,
        padding:20,
        borderRadius:10
    },
    bcov:{
        marginTop:20,
        width:200,
        height:100,
        marginLeft:50,
    },
    tip:{
        fontWeight:'600',
        fontSize: 15,
        backgroundColor:'#fff',
        marginTop:10,
        height:35,
        marginHorizontal:15,
        padding:10,
        borderRadius:5
    },
    ctn:{
        flexDirection:'row',
        marginTop:20,
    },
    to:{
        backgroundColor:'#00BCC9',
        color: '#FFF',
        marginLeft:35,
        fontSize:18,
        fontWeight:'800',
        height:40,
        width:80,
        textAlign:'center',
        borderRadius:5,
        padding: 5
    },
    whit:{
        backgroundColor:'#fff',
        marginHorizontal:10,
        borderRadius:10,
    }
});