import React from "react";

import { Text, StyleSheet, View, Button } from "react-native";
import ImageDetail from '../components/ImageDetail';


const Checkout = ({ navigation }) => {
  
  return (
	<View style={styles.container}>
		<Text style={styles.text}>At Checkout</Text>
		<Button 
			onPress={() => navigation.navigate('Cart')}
			title="Cart"
		/>
	</View>
  );
};

export default Checkout;



const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',	   
	},
	text: {
		fontSize: 20,
		alignItems: 'center',
		   
 	 },
  	text2: {
	  borderRadius: 60,
	  flex: 1,
	  height: 30,
	  width: 20,
  	},
  	logo: {
		width: 300,
		height: 400,
 	}
});

const styles2 = StyleSheet.create({
	text: {
	  fontSize: 25,
	  
	},
	text2: {
		fontSize: 20,
	},
	logo: {
		justifyContent: 'center',
		alignItems: 'center'
	}
  });
export default Checkout;

