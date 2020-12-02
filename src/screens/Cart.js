import React from 'react';
import {Text, View,TouchableOpacity, StyleSheet} from 'react-native';

const Cart=(props)=>{
    return(
        <View>
            <Text>This is Cart</Text>
            <View>
            <TouchableOpacity
              style={styles.endBtn}
              onPress={() => props.navigation.navigate('Checkout')}>
              <Text style={styles.loginTxt}>Checkout </Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}
export default Cart;
const styles = StyleSheet.create({
    endBtn: {
        marginRight: 80,
      },
    }
);    