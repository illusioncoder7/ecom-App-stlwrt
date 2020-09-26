import React from "react";
import { 
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  StatusBar,
  ScrollView
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import LinearGradient from "react-native-linear-gradient";

export default class Detail extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={require('../../assests/header_detail.png')}
          style={{flex:1, alignItems:'center'}}
          resizeMode={"stretch"}
        >
          <View style={styles.image_container}>
              <Image 
                source={require("../../assests/book.jpg")}
                style={styles.image}
              />
          </View>
          
        </ImageBackground>
        <ScrollView style={styles.footer}>
            <View style={styles.status}>
                <Text style={{color:'green'}}>AVALIABLE</Text>
            </View>
            <Text  style={styles.textDetail}>+12</Text>
            
            <Text  style={styles.textDetail}>This book can make you, break you and make best version of you....</Text>
            <LinearGradient
            start={{x: 0, y: 0}} 
            end={{x: 1, y: 0}} 
            colors={['#009245', '#8cc631']}
            style={styles.button}
            >
              <Text style={styles.textOrder}>Add to cart</Text>
              
            </LinearGradient>

        </ScrollView>
      </View>
    )
  }
}

const height = Dimensions.get("screen").height;
const height_image = height * 0.5 * 0.5;

var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white'
  },
  footer: {
    flex:1,
    paddingHorizontal:40
  },
  image_container: {
    width: height_image,
    height: height_image,
    marginTop: height_image/3
  },
  image: {
    width:'100%',
    height:'100%',
    borderWidth:5,
    borderColor:'white',
    borderRadius: height_image/2
  },
  back:{
    position:'absolute',
    left:0,
    marginTop:30,
    marginLeft:15
  },
  status: {
    width:100,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderRadius:50,
    paddingVertical:3,
    borderColor:'green'
  },
  textPrice: {
    color:'green',
    fontWeight:'bold',
    fontSize:30,
    marginTop:20
  },
  textName: {
    color: '#3e3c3e',
    fontWeight:'bold',
    fontSize:45,
    marginTop:5
  },
  textDetail: {
    color:'gray',
    marginTop:10
  },
  button: {
    justifyContent:'center',
    alignItems:'center',
    marginTop:30,
    paddingVertical:10,
    borderRadius:100
  },
  textOrder: {
    color:'white',
    fontWeight:'bold',
    fontSize:18
  }
});