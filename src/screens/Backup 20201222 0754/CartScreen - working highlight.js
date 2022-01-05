import React from 'react';  
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';  
import {useState} from 'react';
import ColorCounter from '../components/ColorCounter';

const CartScreen = () => {

    const [total, setTotal] = useState(0);    
    const [count, setCount] = useState(0);
    const [round, setRound] = useState(0);
    const [pass, setPass] = useState(0);
    const [selectedId, setSelectedId] = useState(null);
    const [selectedArr, setSelectedArr] = useState([0,0,0]);

    const store = [
        { product: 'Milk', cost: 4 }, 
        { product: 'Bread', cost: 2 }, 
        { product: 'Cereal', cost: 5 },
    ];

    console.log("here");
    
    const renderSeparator = () => {  
        return (  
            <View  
                style={{  
                    height: 1,  
                    width: "100%",  
                    backgroundColor: "#000",  
                }}  
            />  
        );  
    };  

    const updateCart = (item, onPress) => {
        console.log("update cart",item,onPress);

      let tmpselectedArr = selectedArr;
      let tmpTotal = 0;
      let tmpCount = 0;

      for (let i = 0; i < store.length; i++) {
           console.log("COMPARE: ",item.product, store[i].product);
           if (item.product == store[i].product) {
                if (selectedArr[i] == 0) {
                    tmpselectedArr[i] = 1;
                    tmpTotal = total + item.cost;
                    tmpCount = count + 1;
                } else {  
                    tmpselectedArr[i] = 0;
                    tmpTotal = total - item.cost;
                    tmpCount = count - 1;
                }
           }
       }
console.log("total: ",tmpTotal);
      //setSelectedArr(selectedArr, tmpselectedArr);
      // setCount(count, tmpCount);
    
        //setSelectedId(item.product);
        return (onPress);
    };
    
    //<Text onPress={updateCart(item,onPress)} style={styles.product}>{item.product}</Text>
 
    const Item = ({ item, style, onPress}) => {
        return (
            <TouchableOpacity style={[styles.item, style]}>
                <Text onPress={onPress} style={styles.product}>{item.product}</Text>
            </TouchableOpacity>
        );
    }
      
    const renderItem = ({ item }) => {
        const backgroundColor = item.product === selectedId ? "#6e3b6e" : "#f9c2ff";
//console.log(item);
      return (
        <Item
          item={item}
          onPress={() => setSelectedId(item.product)}
          style={{ backgroundColor }}
        />
      );
    };

    return <View style={styles.container}> 
        <Text style={styles.header}>Total: {total}     Count: {count}</Text> 
        <FlatList
	        keyExtractor={(store) => store.product}
	    	data={store}
            renderItem={renderItem}
            extraData={selectedId}
	    	/>
    </View> 
         
};

//ItemSeparatorComponent={this.renderSeparator};
 
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
    },  
    product: {  
        padding: 10,  
        fontSize: 18,  
        height: 44,  
    },  
    header: {  
        padding: 10,  
        fontSize: 20,  
        height: 44, 
        fontWeight: 'bold', 
    },  
})  

export default CartScreen;

