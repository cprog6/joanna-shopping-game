import React, {Component} from 'react';  
import { AppRegistry, FlatList,  
	StyleSheet, Text, View,Alert, TouchableOpacity } from 'react-native';  
import useState from 'react';
  
//const [total,setTotal] = useState(0);

export default class FlatListBasics extends Component {  
    constructor(props){
        super(props);
		//console.log(this.props);
        this.state = { total: 0, count: 0, round: 1, pass: 0, selectedArr: [0,0,0]}    
        store = [['Milk', 4], ['Bread', 2], ['Cereal', 5]];
        //mybgColor = "backgroundColor: transparent";
    }

	renderSeparator = () => {  
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

    //handling onPress action  
    const renderItem = ({item}) => { 
        //console.log(store[0][0], item.key);
        //console.log("selectedArr " + this.state.selectedArr[1]);
 //       console.log("bgColor " + styles.item.fontSize);
        <Text style={styles.item} 
//            onPress={
           //this.getListViewItem.bind(this, item)
//6                }
        >{item.key}</Text>
        //ItemSeparatorComponent={this.renderSeparator}  

 6        //Alert.alert(item.key);
        return ();
    }  
    

//    if (pass === 1) {
//        console.log("pass")
//    }

    render() {  
        return (  
            <View style={styles.container}> 
                <Text style={styles.header}>Total: {this.state.total}      Count: {this.state.count}</Text> 
                <FlatList  
                    data={[{key: 'Milk', cost: 4}, {key: 'Bread', cost: 2}, {key: 'Cereal', cost: 5}]}
                   
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}                   
                />  
            </View>  
        );  
    }  
}  
  
var styles = StyleSheet.create({  
    container: {  
        flex: 1,  
    },  
    item: {  
        padding: 10,  
        fontSize: 18,  
        height: 44, 
        //backgroundColor: {mybgColor},
        backgroundColor: 'transparent',
     },
     header: {
         padding: 10,
         fontSize: 20,
         height: 44,
         //font: 'bold',
     }  
     
})  
  