import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const ImageDetail=({ title, imgsrc, imgpoint })=>{
    return(
        <View style={styles.imgcontainer}>
            <Image
                source={imgsrc}
            />
            <Text>This is image Details {title}</Text>
            <Text>The image scale - {imgpoint}</Text>
            {/* without defactoring props */}
        </View>
    );

}
const styles= StyleSheet.create({
    imgcontainer:{
        // alignContent: "center",
        alignItems:"center",
    }
});
export default ImageDetail;