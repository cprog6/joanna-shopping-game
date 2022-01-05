import React, { useState } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const store = [[4,'Milk'], [3,'Jelly'], [2,'Bread'], [2,'Bannas'], [3,'Toliet Paper'], [3,'Doritos'], [3,'Eggs'], [3,'Lettuce'], [3,'Cherrios']
];
itemListArr = [];

for (let i = 0; i < store.length; i++) {
	itemListArr.push(
		<Button style={styles} title={store[i][1]}/>
	)  
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	},
	button: {
	  alignItems: 'center',
	  backgroundColor: '#DDDDDD',
	 padding: 10,
	marginBottom: 10,
  }
})

const CartScreen = () => {
	const [cartAmount, setCartAmount] = useState(0);
	const [cartCount, setCartCount] = useState(0);

	return <View>

      <Text>Total: ${cartAmount}   Count: {cartCount}</Text>

	  <Text>{itemListArr}</Text>
 
      <TouchableOpacity
       style={styles.button}
	   onPress={() => {
			setCartAmount(cartAmount + 25);
			setCartCount(cartCount + 1);
	   }}
      >

       <Text>Click me</Text>
      </TouchableOpacity>

	  
    </View>
};

export default CartScreen;
