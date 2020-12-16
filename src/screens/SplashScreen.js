import React, {Component} from 'react';
import {View, ImageBackground, Image} from 'react-native';

export default class SplashScreen extends Component{
    
    constructor(props){
        super(props);
        setTimeout(() => {
            this.props.navigation.navigate('PostScreen')
        }, 3000);
    }
    render(){
        return(
            <ImageBackground
                source={require('../../assests/splashBackground.png')}
                style={{height:'100%', width:'100%'}}
            >
                <View
                    style={{flex:1, justifyContent: 'center', alignItems:'center'}}
                >
                    <Image source={require('../../assests/GroceryStoreLogo.png')}
                        style={{height:'50%', width:'100%'}}
                    />
                </View>
            </ImageBackground>
        );
    }
}
