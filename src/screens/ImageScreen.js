import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ImageDetail from '../components/ImageDetail';
const ImageScreen=()=>{
    return(
        <View>
            <Text style={{textAlign:'center', fontSize:30}}>This is image screen</Text>
<<<<<<< HEAD
            {/* <ImageDetail imgpoint={4} title='Forest' imgsrc={require('../../assests/Forest.jpg')}/>
=======
            <ImageDetail imgpoint={4} title='Forest' imgsrc={require('../../assests/forest.jpg')}/>
>>>>>>> 292be7f583f87eb8c4b1f4cd6860075e485bfae6
            {/* COMMENTING OUT SECTION BELOW CAUSE IT CAUSED ERROR THAT THE FILE ARE NOT FOUND*/}
            {/* <ImageDetail imgpoint={9} title='Mountain' imgsrc={require('../../assets/Mountain.jpg')}/>
            <ImageDetail imgpoint={7} title='Beach' imgsrc={require('../../assets/Beach.jpg')}/> */}
        </View>
    );

}
const styles= StyleSheet.create({

});
export default ImageScreen;
