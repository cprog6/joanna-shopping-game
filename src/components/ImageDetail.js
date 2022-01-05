import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const ImageDetail = props => {
		return <View>
			<Image style={styles2.logo} source={props.imageSource} />
			<Text>{props.title}</Text>
			<Text>{props.imageScore}</Text>
		</View>
};

const styles = StyleSheet.create({});

const styles2 = StyleSheet.create({
	logo: {
		width: 300,
		height: 400,	
	}
  });

export default ImageDetail;
