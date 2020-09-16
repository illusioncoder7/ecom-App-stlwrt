import React ,{ useState} from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
 

const CounterScreen=({ title, imgsrc, imgpoint })=>{
    const [counter ,setCounter ] = useState(0);//assigning data from array to variable according to index number
    return(
        <View style={styles.imgcontainer}>
             <Text>This is counter screen</Text>
             <Button title="Increase" onPress={() => setCounter(counter + 1)}/>
             <Button title="Decrease" onPress={() => setCounter(counter -1)}/>
    <Text>Counter value {counter}</Text>
        </View>
    );

}
const styles= StyleSheet.create({
    imgcontainer:{
        // alignContent: "center",
        alignItems:"center",
    }
});
export default CounterScreen;