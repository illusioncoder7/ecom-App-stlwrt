// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
import OnboardingScreen from './src/screens/OnboardingScreen';
import PostScreen from './src/screens/PostScreen'; 
import LoginScreen from './src/screens/loginScreen';
import SignupScreen from './src/screens/SignupScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import CartScreen from './src/screens/CartScreen';
import Checkout from './src/screens/CheckoutScreen';
import SplashScreen from './src/screens/SplashScreen';
import ProfileScreen from './src/screens/ProfileScreen';

 
const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen =()=>(
  <HomeStack.Navigator 
    screenOptions={{
      headerShown:false
    }}
    initialRouteName="SplashScreen" headerMode='none'
  >
    <HomeStack.Screen name="SplashScreen" component={SplashScreen} />
    {/* <HomeStack.Screen name="Onboarding" component={OnboardingScreen} /> */}
    <HomeStack.Screen 
    name="Login" 
    component={LoginScreen} 
    options={{title:'Stalwart Engineering Solution'}}
    />
    
    <HomeStack.Screen name="DetailsScreen" component={DetailsScreen} />
    <HomeStack.Screen name="PostScreen" component={PostScreen} />
     
    <HomeStack.Screen name="Signup" component={SignupScreen} />
    <HomeStack.Screen name="Cart" component={CartScreen} />
    <HomeStack.Screen name="Checkout" component={Checkout}/>
    <HomeStack.Screen name="TabContainer" component={TabContainer}/>


  </HomeStack.Navigator >
  
)
const DetailStackScreen =()=>(
  <DetailStack.Navigator initialRouteName="TabContainer" headerMode='none'>
     
    
    <DetailStack.Screen name="PostScreen" component={PostScreen} />
    <DetailStack.Screen name="DetailsScreen" component={DetailsScreen} />

    <DetailStack.Screen name="Signup" component={SignupScreen} />
    <DetailStack.Screen name="Cart" component={CartScreen} />
    <DetailStack.Screen name="Checkout" component={Checkout}/>
    <DetailStack.Screen name="TabContainer" component={TabContainer}/>
    


  </DetailStack.Navigator >
  
)
const TabContainer=()=>{
  return(
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={PostScreen} 
          
          />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Profile" component={SignupScreen} />

      </Tab.Navigator>
  )
}
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Setting" component={DetailStackScreen} />

      </Drawer.Navigator>
     
    </NavigationContainer>
  );
}

export default App;

 
