/* eslint-disable prettier/prettier */
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
import Logo from '../components/Logo';

export default class LoginScreen extends Component {

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
       <Logo/>
        <View style={styles.subView}>
          <Text style={styles.subTxt}>Login</Text>
          <TextInput style={styles.nameInput} placeholder="Email" onChangeText={(email => { this.setState({ email }) })} />
          <TextInput style={styles.nameInput} placeholder="Password" secureTextEntry={true} onChangeText={(pass => { this.setState({ pass }) })} />
          <Text style={styles.forgotTxt}>Forgot Password?</Text>
          <TouchableOpacity style={styles.btn} onPress={this.logIn}>
            <Text style={styles.btnTxt}>Login</Text>
          </TouchableOpacity>
          <View style={styles.endView}>
            <Text style={styles.endTxt}>Create an account?</Text>
            <TouchableOpacity
              style={styles.endBtn}
              onPress={() => this.props.navigation.navigate('signup')}>
              <Text style={styles.loginTxt}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c313a',
    height: 1000,
  },
  subView: {
    backgroundColor: '#e0ffff',
    height: 1000,
    marginTop: 40,
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
    marginTop: 20,
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
    marginTop: 100,
    marginLeft: 60,
    fontWeight: 'bold',
  },
  endBtn: {
    marginRight: 80,
  },

  loginTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 95,
    color:'blue'
  },
  
forgotTxt: {
    height: 40,
    width: 270,
    marginLeft: 40,
    color:'blue',
    marginTop: 20
  }
  
});
