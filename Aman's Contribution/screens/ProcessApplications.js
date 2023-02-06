import React,{ useState } from 'react';
import { StyleSheet, Text, View,ImageBackground} from 'react-native';
import {Table, Row, TableWrapper, Rows, Col} from 'react-native-table-component';

export default function ProcessApplications(){

    const tableHead = ['SL','Roll no.','Payment','GPA','Approve/Reject']

    const tableData=[
        ['1', '1001', 'Y','5.0',''],
        ['2', '1002', 'N','5.0',''],
        ['3', '1003', 'Y','5.0',''],
        ['4', '1004', 'Y','5.0',''],
    ]

    const image = require('../assets/background.png');

    return (
        <ImageBackground style={styles.pic} source={image} resizeMode="cover" >
            <View style={styles.tc}>
                <Text style={styles.ts}>Process Applications</Text>
            </View>
            <View style={styles.tab}>
                <Table borderStyle={{borderWidth:2, borderColor:'black'}}>
                    <Row style={styles.row} data={tableHead} textStyle={styles.text}/>
                    <Rows style={styles.row} data={tableData} textStyle={styles.text}/>
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