import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ImageDetail from '../components/ImageDetail';
const ImageScreen=()=>{
    return(
        <View>
            <Text style={{textAlign:'center', fontSize:30}}>This is image screen</Text>
            {/* <ImageDetail imgpoint={4} title='Forest' imgsrc={require('../../assests/forest.jpg')}/>
            <ImageDetail imgpoint={9} title='Mountain' imgsrc={require('../../assets/mountain.jpg')}/>
            <ImageDetail imgpoint={7} title='Beach' imgsrc={require('../../assets/beach.jpg')}/> */}
        </View>
    );

}
const styles= StyleSheet.create({

});
export default ImageScreen;