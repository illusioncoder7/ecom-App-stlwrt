// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import CounterScreen from './src/screens/CounterScreen';
import ImageScreen from './src/screens/ImageScreen';
import ListScreen from './src/screens/ListScreen'; 
import PostScreen from './src/screens/PostScreen'; 



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

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
} 
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="HomeApp" 
        component={HomeScreen} 
        // options={{title:'Overview'}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Image" component={ImageScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Components" component={ComponentScreen} />
        <Stack.Screen name="PostScreen" component={PostScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import ComponentScreen from './src/screens/ComponentScreen';
// import CounterScreen from './src/screens/CounterScreen';
// import HomeScreen from "./src/screens/HomeScreen";
// import ImageScreen from './src/screens/ImageScreen';
// import ListScreen from './src/screens/ListScreen';

// const navigator = createStackNavigator( //   REACT NAVIGATION VERSION 4 CODES WILL NO WORK FOR VERSION 5
//   {
//     Home: HomeScreen,
//     Components: ComponentScreen,
//     List: ListScreen,
//     Image: ImageScreen,
//     Counter: CounterScreen,
  
//   },                
//   {
//     initialRouteName: "Home",
//     defaultNavigationOptions: {
//       title: "Stalwart Interns"
//     }
//   }
// );

// export default createAppContainer(navigator);