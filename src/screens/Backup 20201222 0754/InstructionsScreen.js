import React  from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity} from 'react-native';
import { Component } from 'react';

const totalCartAmount = 0;
const totalCartCount = 0;

console.log("here");

<View>
  <Text>Total: ${totalCartAmount}   Count: {totalCartCount}</Text>
</View>

class InstructionsScreen extends Component {
render() {
  return (

    <View style={styles.container}>
      <TouchableOpacity
       style={styles.button}
       onPress={() => adjustTotals(25, 1)}
      >
       <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  )
}
}

const adjustTotals = (cartAmount, cartCount) => {
  const totalCartAmount = totalCartAmount + cartAmount;
  const totalCartCount = totalCartCount + cartCount;

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
    marginBottom: 10
  }
})


export default InstructionsScreen;