//ADDED SCROLVIEW ON LOGIN AND SIGN UP SCREEN AS IT DID NOT SCROLLED {/* Sujan implemented composition of reuseable components */}
import React, { Component } from 'react';
import {
  ScrollView, 
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';



import Logo from '../components/Logo';
export default class SignupScreen extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      pass: ''
    }
  }
  signUp = () => {
    const { email, pass } = this.state
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, pass)
        .then(user => {
           Alert.alert('Registered Sucessfully')
          this.props.navigation.navigate('detailsScreen')

        
        
       }

        );
    }
    catch (error) {
      console.log('err');

    }
  }

  
  render() {
    return (
      <ScrollView> 
      <View style={styles.cantainer}>
      <Logo/> 
        
        <View style={styles.subView}>
          <Text style={styles.subTxt}>Signup</Text>
          <TextInput style={styles.nameInput} placeholder="Username" />
          <TextInput style={styles.nameInput} placeholder="Email" onChangeText={(email => { this.setState({ email }) })} />
          <TextInput style={styles.nameInput} placeholder="Phone Number" onChangeText={(Phone => { this.setState({ Phone }) })} />
          <TextInput style={styles.nameInput} placeholder="Password" secureTextEntry={true} onChangeText={(pass => { this.setState({ pass }) })} />
          <TouchableOpacity style={styles.btn} onPress={this.signUp}>
            <Text style={styles.btnTxt}>SignUp</Text>
          </TouchableOpacity>
          <View style={styles.endView}>
            <Text style={styles.endTxt}>Already have an account?</Text>
            <TouchableOpacity
              style={styles.endBtn}
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.loginTxt}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cantainer: {
    backgroundColor: '#5f8494',
    height: 800,
    
  },
  subView: {
    backgroundColor: '#e0ffff',
    height: 651,
    marginTop: 10,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  headerTxt: {
    fontSize: 40,
    marginLeft: 40,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    marginTop: 140,
  },
  subTxt: {
    color: 'black',
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 40,
  },
  nameInput: {
    height: 40,
    width: 270,
    marginLeft: 40,
    borderBottomWidth: 1,
    marginTop: 30,
  },
  btn: {
    height: 50,
    width: 200,
    backgroundColor: '#1c313a',
    borderRadius: 80,
    borderWidth: 2,
    marginLeft: 90,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  endView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
endTxt: {
    fontSize: 15,
    marginTop: 45,
    marginLeft: 60,
    fontWeight: 'bold',
  },
  loginTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
    color:'blue'
  },
  
  endBtn: {
    marginRight: 80,


  },
});

//done
