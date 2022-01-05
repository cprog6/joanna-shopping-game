import React, {Component} from 'react';  
import { AppRegistry, FlatList,  
	StyleSheet, Text, View,Alert, TouchableOpacity } from 'react-native';  
import useState from 'react';
  
//const [total,setTotal] = useState(0);

export default class FlatListBasics extends Component {  
    constructor(props){
        super(props);
		//console.log(this.props);
        this.state = { total: 0, count: 0 }    
        store = [['Milk', 4], ['Bread', 2], ['Cereal', 5]];
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
    getListViewItem = (item) => { 
        //console.log(store[0][0], item.key);
        for (let i = 0; i < store.length; i++) {
            if (item.key === store[i][0]) {
                let tmpTotal = this.state.total + item.cost;
                let tmpCount = this.state.count + 1;
                this.setState({total: tmpTotal});
                this.setState({count: tmpCount});
             }
        }

		//Alert.alert(item.key); 
	}  

    render() {  
        return (  
            <View style={styles.container}> 
                 <Text style={styles.item}>Total: {this.state.total}      Count: {this.state.count}</Text> 

                <FlatList  
                    data={[{key: 'Milk', cost: 4}, {key: 'Bread', cost: 2}, {key: 'Cereal', cost: 5}]}
                   
                    renderItem={({item}) =>  
                       <Text style={styles.item}  
                        onPress={
								  this.getListViewItem.bind(this, item)
								}
					>{item.key}</Text>}  
//					   <TouchableOpacity style={styles.item}
//							 onPress={
//								  this.getListViewItem.bind(this, item)
//								  total = total + 25;
//								}
//					>{item.key}</TouchableOpacity>}
                  ItemSeparatorComponent={this.renderSeparator}  
                />  
            </View>  
        );  
    }  
}  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
    },  
    item: {  
        padding: 10,  
        fontSize: 18,  
        height: 44,  
    },  
})  
  