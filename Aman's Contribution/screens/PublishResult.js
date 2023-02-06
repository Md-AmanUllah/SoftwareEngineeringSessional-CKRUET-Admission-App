import React from 'react';
import { StyleSheet, Text, View, TextInput,ImageBackground,TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function PublishResult(){
    const im = require('../assets/background.png');
    const navigation = useNavigation();

    return (
        <ImageBackground style={styles.pic} source={im} resizeMode="cover" >
            <View style={styles.tc}>
                <Text style={styles.ts}>Publish Result</Text>
            </View>
            <View style={styles.bkash}>
                <TextInput 
                placeholder='Application Name'
                style={styles.tip}/>
                <TextInput 
                placeholder='Applicant Roll'
                keyboardType='numeric'
                style={styles.tip}/>
                <TextInput 
                placeholder='Applicant Merit'
                keyboardType='numeric'
                style={styles.tip}/>
 
                <TouchableOpacity 
                    onPress={()=>navigation.navigate('Home')}
                >
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
        borderRadius:10,
        fontWeight: '500',
        fontSize: 15,
    },
    to1:{
        marginTop:20,
        backgroundColor:'#00BCC9',
        color:'#FFF',
        marginLeft:35,
        fontSize:16,
        fontWeight:'bold',
        width:200,
        textAlign:'center',
        borderRadius:20,
        padding: 5
    },

});
