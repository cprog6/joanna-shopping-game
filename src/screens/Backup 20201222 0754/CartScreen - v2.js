import React, { useState } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';

const store = [['Milk',4], ['Jelly',3], ['Bread',2], ['Bannas',2], ['Toliet Paper',3
], ['Doritos',3], ['Eggs',2], ['Lettuce',3], ['Cherrios',3]
];
itemListArr = [];

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

for (let i = 0; i < store.length; i++) {
	itemListArr.push(
		<Button style={styles} title={store[i][0]}
				onPress={() => {
				setCartAmount(cartAmount + 25);
//				setCartCount(cartCount + 1);
		    }}
		/>
	)  
}

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
