// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'  

import OnboardingScreen from './src/screens/OnboardingScreen';
import PostScreen from './src/screens/PostScreen'; 
import LoginScreen from './src/screens/loginScreen';
import SignupScreen from './src/screens/SignupScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import CartScreen from './src/screens/CartScreen';
import Checkout from './src/screens/CheckoutScreen';
import SplashScreen from './src/screens/SplashScreen';
import AccountScreen from './src/screens/AccountScreen';

 
const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen =()=>(
  <HomeStack.Navigator 
    screenOptions={{
      headerShown:false
    }}
    initialRouteName="TabContainer" headerMode='none'
  >
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
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Icon
                  name={
                    focused
                      ? 'home'
                      : 'home'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Basket') {
              return (
                <Icon
                  name={focused ? 'shopping-basket' : 'shopping-basket'}
                  size={size}
                  color={color}
                />
              );
            }
            else if (route.name === 'Categories') {
              return (
                <Icon
                  name={focused ? 'list' : 'list'}
                  size={size}
                  color={color}
                />
              );
            }
            else if (route.name === 'Account') {
              return (
                <Icon
                  name={focused ? 'user' : 'user'}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={PostScreen} 
          
          />

        <Tab.Screen name="Categories" component={CartScreen} />  
        <Tab.Screen name="Basket" component={CartScreen} />
        <Tab.Screen name="Account" component={SignupScreen} />

      </Tab.Navigator>
  )
}
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="SplashScreen" 
        
      >
        <Drawer.Screen name="Home" component={HomeStackScreen}/>
        <Drawer.Screen name="Account" component={AccountScreen} />
        <Drawer.Screen name="Setting" component={DetailStackScreen} />
        <Drawer.Screen name="SplashScreen" component={SplashScreen}  />

      </Drawer.Navigator>
     
    </NavigationContainer>
  );
}

export default App;

 
