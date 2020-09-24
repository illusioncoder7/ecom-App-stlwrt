// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import PostScreen from './src/screens/PostScreen'; 
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';



 
 
const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:'#10386e',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
          fontWeight:'bold'
        }
      }}>
        <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{title:'Stalwart Engineering Solution'}}
        />
        
        <Stack.Screen name="PostScreen" component={PostScreen} />
         
        <Stack.Screen name="Signup" component={SignupScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

 