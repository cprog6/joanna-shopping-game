import React from 'react';  
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Modal} from 'react-native';  
import {useState} from 'react';

const CartScreen = ({ navigation }) => {

    const DIFFICULTY = 4;

    const [total, setTotal] = useState(0);    
    const [count, setCount] = useState(0);
    const [round, setRound] = useState(0);
    const [checkbook, setCheckbook] = useState(0);
    const [selectedArr, setSelectedArr] = useState([]);
    const [store, setStore] = useState([]);

    const inventory = [
        { key: 1, product: 'Diet Mountain Dew - 12 pack', cost: 4, }, 
        { key: 2, product: 'Yellow Onion - medium', cost: 1, }, 
        { key: 3, product: 'Celery', cost: 1, },
        { key: 4, product: 'Carrots - 2 lbs', cost: 2, }, 
        { key: 5, product: 'Prezel Hamburger Buns', cost: 4, }, 
        { key: 6, product: 'Large Grade A Eggs - dozen', cost: 1, },
        { key: 7, product: 'Cottage Cheeze', cost: 4, }, 
        { key: 8, product: 'Ore Ida Tator Tots', cost: 3, }, 
        { key: 9, product: '1% Milk - gallon', cost: 4, },
        { key: 10, product: '2% Chocolate Milk - gallon', cost: 3, }, 
        { key: 11, product: 'Townhouse Crackers', cost: 3, }, 
        { key: 12, product: 'Vanilla Cake Mix', cost: 2, },
        { key: 13, product: 'Chicken Broth', cost: 2, }, 
        { key: 14, product: 'Avocado', cost: 1, }, 
        { key: 15, product: 'Velveeta - 2 lbs', cost: 7, },
        { key: 16, product: 'Sun Chips', cost: 2, }, 
        { key: 17, product: 'Ground Beef 85% - 1 lbs', cost: 2, }, 
        { key: 18, product: 'Chunk Light Tuna', cost: 1, },
        { key: 19, product: 'Hidden Vally Ranch - 19 oz', cost: 3, }, 
        { key: 20, product: 'Roma Tomatoes - per lbs', cost: 2, }, 
        { key: 21, product: 'Green Peppers - per lbs', cost: 1, },
        { key: 22, product: 'Strawberries - 16 oz', cost: 5, }, 
        { key: 23, product: 'Colby Jack - chunk 8 oz', cost: 4, }, 
        { key: 24, product: 'Jif Peanut Butter - 13 oz', cost: 4, },
        { key: 25, product: 'Stove Top Stuffing - 6 oz', cost: 2, }, 
        { key: 26, product: 'Vlasic Pickes - 16 oz', cost: 2, }, 
        { key: 27, product: 'Purified Water - 24 pack', cost: 2, },
        { key: 28, product: 'Floridas Naural Orange Juice - 52 oz', cost: 3, }, 
        { key: 29, product: 'Pinapple - whole', cost: 1, }, 
        { key: 30, product: 'Navel Oranges per lbs', cost: 3, },
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
console.log("checkout");

        if (total == checkbook) {
            tmpRound = round + 1;
            setRound(tmpRound);
 console.log("round: ", round);
 console.log("tmpRound: ", tmpRound);
 
            newRound(tmpRound); 
            <Button 
			title="Continue"
			onPress={() => navigation.navigate('Checkout')}
		    />
            
        } else {
            let tmpRound = round;
        }
        return
    }

    const newRound= (tmpRound) => {
        
        //set up a new cart
        setSelectedArr([]);
        setTotal(0);
        setCheckbook(0);
        setCount(0);

        let cartItems = 0;
        let rndIndex = 0;
        let cartItemsArr = [];
        tmpCheckbook = 0;
        tmpInventory = inventory;
        tmpSelectedArr = [];
        do {
            rndIndex = Math.floor((Math.random() * tmpInventory.length));
console.log("random index:", rndIndex);
console.log("inventory.length", tmpInventory.length);
console.log("cartItems", cartItems);
console.log("round", round);
console.log("tmpround", tmpRound);

            if (tmpInventory[rndIndex] !== undefined) {
                cartItemsArr.push(tmpInventory[rndIndex]);
                tmpCheckbook = tmpCheckbook + tmpInventory[rndIndex].cost;
                delete tmpInventory[rndIndex];
                cartItems++;
                tmpSelectedArr.push(0);
            }
        }
        while (cartItems < tmpRound);
console.log("cartItemsArr", cartItemsArr);
console.log("tmpCheckbook: ", tmpCheckbook);

        setCheckbook(tmpCheckbook);

        //set up store items 
        let storeCnt = tmpRound + DIFFICULTY;
console.log("storeCnt: ",storeCnt)
        let storeItems = cartItemsArr.length;
        let tmpStoreArr = cartItemsArr;
        do {
            rndIndex = Math.floor((Math.random() * inventory.length));
console.log("Store random index:", rndIndex);
            if (tmpInventory[rndIndex] !== undefined) {
                tmpStoreArr.push(tmpInventory[rndIndex]);
                tmpSelectedArr.push(0);
                delete tmpInventory[rndIndex];
                storeItems++;
            }
        }
        while (storeItems < storeCnt);

console.log("tmpStoreArr: ", tmpStoreArr);
console.log("tmpSelectedArr: ", tmpSelectedArr);
        setStore(tmpStoreArr);
        setSelectedArr(tmpSelectedArr);  
console.log("END OF CHECKOUT selectedArr:", selectedArr);
        return
    }

    const updateCart = (item) => {

      let tmpselectedArr = selectedArr;
      let tmpTotal = 0;
      let tmpCount = 0;

console.log("--------tmpselectedArr 1", tmpselectedArr);

      for (let i = 0; i < store.length; i++) {
           if (item.key == store[i].key) {
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

console.log("--------tmpselectedArr 2", tmpselectedArr);
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
        let backgroundColor = item.key === item.key ? "#6e3b6e" : "#f9c2ff";

        for (let i = 0; i < store.length; i++) {
              if (item.key == store[i].key) {
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
        <Text style={styles.header}>Rnd: {round}          Money: ${checkbook}            Cart: {count}</Text> 
        <Button style={styles.header} onPress={() => checkout()} title={`Checkout`} /> 
        <Text> Total: {total} </Text>
        <FlatList
 	    	data={store}
            renderItem={renderItem}
            keyExtractor={(store) => store.key}
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

