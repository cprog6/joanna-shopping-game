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
    const [bgcolor, setbgColor] = useState("#6e3b6e");
    const [selectedProduct, setSelectedProduct] = useState(null);

    const store = [
        { product: 'Milk', cost: 4 }, 
        { product: 'Bread', cost: 2 }, 
        { product: 'Cereal', cost: 5 },
    ];

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

    const updateCart = (item) => {

      let tmpselectedArr = selectedArr;
      let tmpTotal = 0;
      let tmpCount = 0;

      for (let i = 0; i < store.length; i++) {
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
               
       setSelectedArr(tmpselectedArr);
       setTotal(tmpTotal);
       setCount(tmpCount);
    
        return;
    };
    
     const Item = ({ item, style, onPress}) => {
        return (
            <TouchableOpacity>
                <Text onPress={onPress} style={[styles.product,style]}>{item.product}</Text>
            </TouchableOpacity>
        );
    }
      
    const renderItem = ({ item }) => {
        let backgroundColor = item.product === selectedId ? "#6e3b6e" : "#f9c2ff";

        for (let i = 0; i < store.length; i++) {
              if (item.product == store[i].product) {
                if (selectedArr[i] === 0) {
                    backgroundColor = "#6e3b6e";
                } else {
                    backgroundColor = "#f9c2ff";
                }
             }                 
        }

      return (
        <Item
          item={item}    
          onPress={() => updateCart(item)}
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
        fontSize: 19,  
        height: 44,
        backgroundColor: '#6e3b6e',
    },  
    header: {  
        padding: 10,  
        fontSize: 20,  
        height: 44, 
        fontWeight: 'bold', 
    },  
})  

export default CartScreen;

