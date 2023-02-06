import React from 'react';
import { StyleSheet, Text, View, TextInput,ImageBackground,TouchableOpacity, Image } from 'react-native';
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


export default function SubjectChoice(){
    const im = require('../assets/background.png');
    const navigation = useNavigation();

    return (
        <ImageBackground style={styles.pic} source={im} resizeMode="cover" >
            <View style={styles.tc}>
                <Text style={styles.ts}>SubjectChoice</Text>
            </View>
            
            <View style={styles.subjectChoiceContainer}>
                <View style={styles.subjectChoiceContent}>
                    <View style={styles.sCCLeft}>
                        <Text style={styles.subjectChoiceContentText}> 1. CUET CSE</Text>
                    </View>
                    <View style={styles.sCCRight}>
                        <FontAwesome5 name="trash" size={24} color="#FFF" />
                    </View>
                </View>
                <View style={styles.subjectChoiceContent}>
                    <View style={styles.sCCLeft}>
                        <Text style={styles.subjectChoiceContentText}> 2. KUET CSE</Text>
                    </View>
                    <View style={styles.sCCRight}>
                        <FontAwesome5 name="trash" size={24} color="#FFF" />
                    </View>
                </View>
                <View style={styles.subjectChoiceContent}>
                    <View style={styles.sCCLeft}>
                        <Text style={styles.subjectChoiceContentText}> 3. KUET EEE</Text>
                    </View>
                    <View style={styles.sCCRight}>
                        <FontAwesome5 name="trash" size={24} color="#FFF" />
                    </View>
                </View>
                <View style={styles.subjectChoiceContent}>
                    <View style={styles.sCCLeft}>
                        <Text style={styles.subjectChoiceContentText}> 4. RUET CSE</Text>
                    </View>
                    <View style={styles.sCCRight}>
                        <FontAwesome5 name="trash" size={24} color="#FFF" />
                    </View>
                </View>
                <View style={styles.subjectChoiceContent}>
                    <View style={styles.sCCLeft}>
                        <Text style={styles.subjectChoiceContentText}> 5. CUET EEE</Text>
                    </View>
                    <View style={styles.sCCRight}>
                        <FontAwesome5 name="trash" size={24} color="#FFF" />
                    </View>
                </View>
            </View>
            <TouchableOpacity
                onPress={()=>navigation.navigate('Home')}
                style={styles.button}
              >
              <Text style={{fontWeight:'bold',fontSize:22,color:'#FFF'}}>Add More</Text>
              </TouchableOpacity>
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
    subjectChoiceContainer:{
        margin:20,
    },
    subjectChoiceContent:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#00BCC9',
        padding: 10,
        margin: 5,
        borderRadius: 12,
    },
    subjectChoiceContentText:{
        fontSize: 17,
        fontWeight:'500',
        color:'#FFF',
    },
    button:{
      marginTop:10,
      height:50,
      width:250,
      color:'#FFF',
      backgroundColor:'#E99265',
      alignItems:'center',
      justifyContent:'center',
      alignSelf:'center',
      borderRadius:50,
    }

});

