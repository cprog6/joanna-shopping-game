import React from 'react';  
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, TouchableHighlight} from 'react-native';  
import {useState} from 'react';
import ImageDetail from '../components/ImageDetail';

const CartScreen = ({ navigation }) => {

    const DIFFICULTY = 4;

    const [total, setTotal] = useState(0);    
    const [count, setCount] = useState(0);
    const [round, setRound] = useState(0);
    const [checkbook, setCheckbook] = useState(0);
    const [selectedArr, setSelectedArr] = useState([]);
    const [store, setStore] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalImage, setModalImage] = useState(require('../../assets/waytogo2.png'));
    const [mainButtonText, setMainButtonText] = useState("Start");
    const [showTotal, setShowTotal] = useState(0);
    const [totalText, setTotalText] = useState("");
    const [passText, setPassText] = useState("");

    const inventory = [
        { key: '1', product: 'Diet Mountain Dew - 12 pack', cost: 4, }, 
        { key: '2', product: 'Yellow Onion - medium', cost: 1, }, 
        { key: '3', product: 'Celery', cost: 1, },
        { key: '4', product: 'Carrots - 2 lbs', cost: 2, }, 
        { key: '5', product: 'Prezel Hamburger Buns', cost: 4, }, 
        { key: '6', product: 'Large Grade A Eggs - dozen', cost: 1, },
        { key: '7', product: 'Cottage Cheeze', cost: 4, }, 
        { key: '8', product: 'Ore Ida Tator Tots', cost: 3, }, 
        { key: '9', product: '1% Milk - gallon', cost: 4, },
        { key: '10', product: '2% Chocolate Milk - gallon', cost: 3, }, 
        { key: '11', product: 'Townhouse Crackers', cost: 3, }, 
        { key: '12', product: 'Vanilla Cake Mix', cost: 2, },
        { key: '13', product: 'Chicken Broth', cost: 2, }, 
        { key: '14', product: 'Avocado', cost: 1, }, 
        { key: '15', product: 'Velveeta - 2 lbs', cost: 7, },
        { key: '16', product: 'Sun Chips', cost: 2, }, 
        { key: '17', product: 'Ground Beef 85% - 1 lbs', cost: 2, }, 
        { key: '18', product: 'Chunk Light Tuna', cost: 1, },
        { key: '19', product: 'Hidden Vally Ranch - 19 oz', cost: 3, }, 
        { key: '20', product: 'Roma Tomatoes - per lbs', cost: 2, }, 
        { key: '21', product: 'Green Peppers - per lbs', cost: 1, },
        { key: '22', product: 'Strawberries - 16 oz', cost: 5, }, 
        { key: '23', product: 'Colby Jack - chunk 8 oz', cost: 4, }, 
        { key: '24', product: 'Jif Peanut Butter - 13 oz', cost: 4, },
        { key: '25', product: 'Stove Top Stuffing - 6 oz', cost: 2, }, 
        { key: '26', product: 'Vlasic Pickes - 16 oz', cost: 2, }, 
        { key: '27', product: 'Purified Water - 24 pack', cost: 2, },
        { key: '28', product: 'Floridas Naural Orange Juice - 52 oz', cost: 3, }, 
        { key: '29', product: 'Pinapple - whole', cost: 1, }, 
        { key: '30', product: 'Navel Oranges per lbs', cost: 3, },
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

    const checkout = () => {
        tmpRound = 0;
        setMainButtonText("Checkout");
        if (total == checkbook) {
            if (round != 0) {
                setModalImage(require('../../assets/waytogo2.png'));
                setModalVisible2(true);
                setPassText("Next Round"); 
            }
                
            tmpRound = round + 1;
            setRound(tmpRound);
 
            newRound(tmpRound);
            return
            
        } else {
            setModalImage(require('../../assets/insufficientfunds2.png'));
            setModalVisible(true);
            setPassText("Try Again");   
            return
        }
        
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

            if (tmpInventory[rndIndex] !== undefined) {
                cartItemsArr.push(tmpInventory[rndIndex]);
                tmpCheckbook = tmpCheckbook + tmpInventory[rndIndex].cost;
                delete tmpInventory[rndIndex];
                cartItems++;
                tmpSelectedArr.push(0);
            }
        }
        while (cartItems < tmpRound);

        setCheckbook(tmpCheckbook);

        //set up store items 
        let storeCnt = tmpRound + DIFFICULTY;
        let storeItems = cartItemsArr.length;
        let tmpStoreArr = cartItemsArr;
        do {
            rndIndex = Math.floor((Math.random() * inventory.length));
           if (tmpInventory[rndIndex] !== undefined) {
                tmpStoreArr.push(tmpInventory[rndIndex]);
                tmpSelectedArr.push(0);
                delete tmpInventory[rndIndex];
                storeItems++;
            }
        }
        while (storeItems < storeCnt);

        //randomize the store items
        tmpStoreArr2 = [];
        storeItems = 0;
        do {
            rndIndex = Math.floor((Math.random() * tmpStoreArr.length));
           if (tmpStoreArr[rndIndex] !== undefined) {
                tmpStoreArr2.push(tmpStoreArr[rndIndex]);
                delete tmpStoreArr[rndIndex];
                storeItems++;
            }

        } while (storeItems < tmpStoreArr.length);

        setStore(tmpStoreArr2);
        setSelectedArr(tmpSelectedArr);  
        return
    }

     const updateCart = (item) => {

      let tmpselectedArr = selectedArr;
      let tmpTotal = 0;
      let tmpCount = 0;

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

      return (
        <Item
          item={item}    
          onPress={() => updateCart(item)}
          style={{ backgroundColor }}
        />
      );
    };

    const displayTotal = () => {
        if (showTotal == 0) {
            setShowTotal(1);
            setTotalText(total);
        } else {
            setShowTotal(0);
            setTotalText("");
         }
    }        
//    <ImageDetail style={styles.logo} title="" imageSource={modalImage}/>

    return <View style={styles.container}> 
        <Text onPress={() => displayTotal()} style={styles.header}>Rnd: {round}      Money: ${checkbook}.00    Cart: {count}</Text> 
        <TouchableOpacity onPress={() => checkout()} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{mainButtonText}</Text>
        </TouchableOpacity>
        <Text style={styles.total}>{totalText}</Text>

       <FlatList
 	    	data={store}
            renderItem={renderItem}
            keyExtractor={(store) => store.key.toString()}
            ItemSeparatorComponent= {() => renderSeparator()}
            ListFooterComponent= { () => renderSeparator()}
            ListHeaderComponent= { () => renderSeparator()}
        />

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            }}
        >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                
			<ImageDetail style={styles.logo} title="" imageSource={require('../../assets/insufficientfunds2.png')}/>

                <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                    setModalVisible(!modalVisible);
                }}
                >
                <Text style={styles.textStyle}>{passText}</Text>
                </TouchableHighlight>
            </View>
            </View>
        </Modal>

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible2}
            onRequestClose={() => {
            }}
        >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                
			<ImageDetail style={styles.logo} title="" imageSource={require('../../assets/waytogo2.png')}/>

                <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                    setModalVisible2(!modalVisible2);
                }}
                >
                <Text style={styles.textStyle}>{passText}</Text>
                </TouchableHighlight>
            </View>
            </View>
        </Modal>
    </View> 
};

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
    },
    logo: {
		width: 150,
        height: 250,
        padding: 10,
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
    total: {  
        padding: 10,  
        fontSize: 12,  
        fontWeight: '100', 
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
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        width: '90%',
        height: '90%',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
      }
})  

export default CartScreen;

