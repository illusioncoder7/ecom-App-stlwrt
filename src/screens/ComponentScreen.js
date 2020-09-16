import React from 'react';
import {Text, View, StyleSheet } from 'react-native';

const ComponentScreen=() =>{
    return(
        <Text style={styles.text}>This is component</Text>
    );
}

const styles= StyleSheet.create({
    text:{
        fontSize:20,
    }
});
export default ComponentScreen;