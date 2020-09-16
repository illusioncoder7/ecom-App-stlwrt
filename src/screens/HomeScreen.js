import React from "react";
import { 
  Text, StyleSheet, 
  View, Button , 
  TouchableOpacity} from "react-native";

const HomeScreen = ( { navigation }) => { //deconstruction prpps
  // console.log(props.navigation)
  return (
    <View>
      <Text style={styles.text}>Stalwart Technology</Text>
      <Button 
        
        onPress={() => navigation.navigate('Components')}
       // onPress={() => { props.navigation.navigate('Components') }}
        title='Go to components Demo'
      />
      <Button 
        title="Go to list"
        onPress={() => navigation.navigate('List')}
       // onPress={() => props.navigation.navigate('List')}
      />
      <Button 
        title="Go to Image Screen"
        onPress={() => navigation.navigate('Image')}
       // onPress={() => props.navigation.navigate('List')}
      />
      <Button 
        title="Go to Counter Screen"
        onPress={() => navigation.navigate('Counter')}
       // onPress={() => props.navigation.navigate('List')}
      />
      <Text style={{padding:5}}> To post screen</Text>
      <Button 
        title="Go to Post Screen"
        onPress={() => navigation.navigate('PostScreen')}
       // onPress={() => props.navigation.navigate('List')}
      />

      {/* <TouchableOpacity
        onPress={() => props.navigation.navigate('List')}
      >
        <Text> Go to list demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    //salignItems:  'center',
    textAlign: "center",
  }
});

export default HomeScreen;
