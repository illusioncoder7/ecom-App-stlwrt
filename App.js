// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import PostScreen from './src/screens/PostScreen'; 
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';



// function HomeScreen({navigation}) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen body</Text>
//       <Text>should be modified</Text>
//       <Button 
//         title="Go to details"
//         onPress={() => navigation.navigate('Details')}
//       /> 
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

 
const Stack = createStackNavigator();

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

 