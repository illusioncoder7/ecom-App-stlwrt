import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const Checkout=(props)=>{
    return(
        <View>
            <Text>This is Checkout</Text>
            <View>
            <TouchableOpacity
              style={styles.endBtn}
              onPress={() =>  props.navigation.navigate('Checkout')}>
              <Text style={styles.loginTxt}>pay </Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}
export default Checkout;
const styles = StyleSheet.create({
    endBtn: {
        marginRight: 80,
      },
    }
);    