import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ImageDetail from '../components/ImageDetail';
const ImageScreen=()=>{
    return(
        <View>
            <Text style={{textAlign:'center', fontSize:30}}>This is image screen</Text>
            <ImageDetail imgpoint={4} title='Forest' imgsrc={require('../../assests/Forest.jpg')}/>
            {/* COMMENTING OUT SECTION BELOW CAUSE IT CAUSED ERROR THAT THE FILE ARE NOT FOUND*/}
            {/* <ImageDetail imgpoint={9} title='Mountain' imgsrc={require('../../assets/Mountain.jpg')}/>
            <ImageDetail imgpoint={7} title='Beach' imgsrc={require('../../assets/Beach.jpg')}/> */}
        </View>
    );

}
const styles= StyleSheet.create({

});
export default ImageScreen;