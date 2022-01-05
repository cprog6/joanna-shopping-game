import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ImageDetail from '../components/ImageDetail';

const HomeScreen = ({ navigation }) => {
  
  return (
	<View style={styles.container}>
		<Text> </Text>

		<View style={styles.container}>
			<ImageDetail style={styles.logo} title="" imageSource={require('../../assets/j1.png')}/>
		</View>
		<TouchableOpacity 
			onPress={() => navigation.navigate('Cart')} 
			style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Shop!!!</Text>
        </TouchableOpacity>
		<Button 
			onPress={() => navigation.navigate('Instructions')}
			title="Instructions"
		/>
	</View>
  );
};

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
	 },
	 appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 12,
        width: '50%',
        alignSelf: 'center',
      },
	 appButtonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
      },
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
export default HomeScreen;

