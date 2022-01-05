import React from 'react';
import {Text, StyleSheet, View } from 'react-native';

const InstructionsScreen = () => {
	const myName = <Text>Rick</Text>;
	
	return (
		<View>
			<Text style={styles.textStyle}>Instructions</Text>
			<Text style={styles.subHeaderStyle}>My name is is {myName}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 45
	},
	subHeaderStyle: {
		fontSize: 20
	}
});

export default InstructionsScreen;
