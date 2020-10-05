// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import OnboardingScreen from './src/screens/OnboardingScreen';
import PostScreen from './src/screens/PostScreen'; 
import LoginScreen from './src/screens/loginScreen';
import SignupScreen from './src/screens/SignupScreen';
import detailsScreen from './src/screens/detailsScreen';

 
const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen =()=>(
  <HomeStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#10386e',
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'bold'
    }
  }}>
    <HomeStack.Screen name="Onboarding" component={OnboardingScreen} />
    <HomeStack.Screen 
    name="Login" 
    component={LoginScreen} 
    options={{title:'Stalwart Engineering Solution'}}
    />
    
    <HomeStack.Screen name="detailsScreen" component={detailsScreen} />
    <HomeStack.Screen name="PostScreen" component={PostScreen} />
     
    <HomeStack.Screen name="Signup" component={SignupScreen} />
    

  </HomeStack.Navigator >
  
)
const DetailStackScreen =()=>(
  <DetailStack.Navigator>
     
    
    <DetailStack.Screen name="PostScreen" component={PostScreen} />
    <DetailStack.Screen name="Onboarding" component={OnboardingScreen} />
    <DetailStack.Screen name="detailsScreen" component={detailsScreen} />
     
    <DetailStack.Screen name="Signup" component={SignupScreen} />

  </DetailStack.Navigator >
  
)

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Detail" component={DetailStackScreen} />
      </Drawer.Navigator>
     
    </NavigationContainer>
  );
}

export default App;

 
