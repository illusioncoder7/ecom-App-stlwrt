import React from 'react';
import {Text, View,TouchableOpacity, StyleSheet} from 'react-native';

const Cart=(prop)=>{
    return(
        <View>
            <Text>This is Cart</Text>
            <View>
            <TouchableOpacity
              style={styles.endBtn}
              onPress={() => this.props.navigation.navigate('Checkout')}>
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