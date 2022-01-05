import React, { createContext } from 'react';  
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button} from 'react-native';  
import {useState} from 'react';
import ColorCounter from '../components/ColorCounter';

const CartScreen = () => {

    const DIFFICULTY = 4;

    const [total, setTotal] = useState(0);    
    const [count, setCount] = useState(0);
    const [rndMoney, setRndMoney] = useState(0);
    const [round, setRound] = useState(1);
    const [checkbook, setCheckbook] = useState(0);
    const [pass, setPass] = useState(0);
    const [selectedArr, setSelectedArr] = useState([]);
    const [store, setStore] = useState([]);

    const inventory = [
        { product: 'Bread', cost: 2 }, 
        { product: 'Milk', cost: 4 }, 
        { product: 'Cereal', cost: 5 },
        { product: 'Chips', cost: 4 }, 
        { product: 'Spaghetti', cost: 2 }, 
        { product: 'Toliet Paper', cost: 6 },
   ];

    const renderSeparator = () => { 
        return (  
            <View  
                style={{  
                    height: 50,  
                    width: "100%",  
                    backgroundColor: "black",  
                }}  
            />  
        );  
    };  

    const checkout = () => {
        newRound();
        return
    }

    function checkCart(cartIndex) {
        return cartIndex = 0;
    }

    function checkStore(storeIndex) {
        return storeIndex = 0;
    }

    const newRound= () => {
        
        //set up a new cart
        setSelectedArr([]);
        setTotal(0);
        let cartItems = 0;
        let rndIndex = 0;
        let cartItemsArr = [];
        tmpCheckbook = 0;
        setCheckbook(0);
        do {
            rndIndex = Math.floor((Math.random() * inventory.length));
            console.log("cart check ", cartItemsArr.find(checkCart) );
            console.log("cart index ", rndIndex);
            if (cartItemsArr.find(checkCart) === undefined) {
                cartItemsArr.push(rndIndex);
                cartItems++;
            }
        }
        while (cartItems < round); 
        console.log("cartItemArr ", cartItemsArr);

        let tmpCheckbook = 0;
        for (let i = 0; i < cartItemsArr.length; i++) {
            tmpCheckbook = tmpCheckbook + inventory[i].cost;
        }
        setCheckbook(tmpCheckbook);
        console.log("checkbook: ", checkbook);

        //set up store items 
        let storeCnt = round + DIFFICULTY;
        let storeItems = cartItemsArr.length;
        let tmpStoreArr = cartItemsArr;
        do {
            rndIndex = Math.floor((Math.random() * inventory.length));
            console.log("store index ", rndIndex);
            console.log("store check ", tmpStoreArr.find(checkStore) );
            if (tmpStoreArr.find(checkStore) === undefined) {
                tmpStoreArr.push(rndIndex);
                storeItems++;
            }
            tmpStoreArr.push(inventory[rndIndex]);
            storeItems++;
        }
        while (storeItems < storeCnt);
        console.log("cartItemArr ", cartItemsArr);

        let fulltmpStoreArr = [];
        let tmpselectedArr = [];
        for (let i = 0; i < tmpStoreArr.length; i++) {
            fulltmpStoreArr.push(inventory[i]);
            tmpselectedArr.push(0);
        }
        setStore(fulltmpStoreArr);
        setSelectedArr(tmpselectedArr);  
        console.log("store: ", store);
        console.log("selectedArr: ", selectedArr);
        return
    }

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
       
       console.log("selectedArr updateCart 1: ",selectedArr);
       setSelectedArr(tmpselectedArr);
       setTotal(tmpTotal);
       setCount(tmpCount);
       console.log("selectedArr updateCart 2: ",selectedArr);
      
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
        let backgroundColor = item.product === item.product ? "#6e3b6e" : "#f9c2ff";

        console.log("selectedArr inside: ",selectedArr);
        for (let i = 0; i < store.length; i++) {
              if (item.product == store[i].product) {
                if (selectedArr[i] === 0) {
                    backgroundColor = "transparent";
                } else {
                    backgroundColor = "#f9c2ff";
                }
             }                 
        }

        renderSeparator();

      return (
        <Item
          item={item}    
          onPress={() => updateCart(item)}
          style={{ backgroundColor }}
        />
      );
    };

    return <View style={styles.container}> 
        <Text style={styles.header}>Rnd: {round}                Money: ${checkbook}              Cart: {count}</Text> 
        <Button style={styles.header} onPress={() => checkout()} title={`Checkout`} /> 
        <Text> Total: {total} </Text>
        <FlatList
            keyExtractor={(store) => store.product}
	    	data={store}
            renderItem={renderItem}
            //extraData={setSelectedArr}
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
        fontSize: 16,  
        height: 44,
        backgroundColor: '#6e3b6e',
    },  
    header: {  
        padding: 10,  
        fontSize: 16,  
        height: 44, 
        fontWeight: 'bold', 
    },  
})  

export default CartScreen;

