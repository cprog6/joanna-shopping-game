import React  from 'react';
import { StyleSheet, View, Text} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const InstructionsScreen = () => {

  return (
	<View style={styles.text}>
		<Text style={styles.text}>INSTRUCTIONS</Text>
      <View style={styles.text3}>
        <Text>Select the correct number of items by tapping that add up to the Money amount.</Text>
      </View>
      <View style={ styles.bullet }>
        <Text>{'\u2022' + " "}</Text>
      </View>
      <View style={styles.text3}>
        <Text>The round number is equal to the number of items to select.  
   For example, in round 4 select 4 items to add up to Money.</Text>
      </View>
      <View style={ styles.bullet }>
        <Text>{'\u2022' + " "}</Text>
      </View>
      <View style={styles.text3}>
        <Text>Press Checkout when you think you have the correct items selected.</Text>
      </View>
      <View style={ styles.bullet }>
        <Text>{'\u2022' + " "}</Text>
      </View>
      <View style={styles.text3}>
        <Text>If you successfully pick the correct items you will move to the next round.</Text>
      </View>
      <View style={ styles.bullet }>
        <Text>{'\u2022' + " "}</Text>
      </View>
      <View style={styles.text3}>
        <Text>If you do not successfully pick the correct items, continue to guess the right combination of items that will add up to Money.</Text>
      </View>
      <View style={ styles.bullet }>
        <Text>{'\u2022' + " "}</Text>
      </View>
      <View style={styles.text3}>
       <Text>Hint:  During the early rounds track the prices of the items to be used in later rounds.</Text>
      </View>
      <View style={ styles.text }>
        <Text style={styles.text}>Good Luck & Happy Shopping!!!</Text>
      </View>
  </View>
)};


const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',	   
	},
	text: {
		fontSize: 20,
    alignItems: 'center',
    paddingTop: 5,		   
 	 },
  text2: {
	  borderRadius: 60,
	  flex: 1,
	  height: 30,
    width: 20,
    paddingLeft: 20,
  },
  text3: {
		fontSize: 16,
    alignItems: 'center',
    paddingTop: 10,	
    padding: 10,	   
 	 },
  logo: {
		width: 300,
		height: 400,
   },
   row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flex: 1,
    marginVertical: 4
  },
  bullet: {
    width: 10
  },
  bulletText: {
    flex: 1
  }
});

export default InstructionsScreen;