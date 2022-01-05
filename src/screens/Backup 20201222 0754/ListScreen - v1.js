import React, {Component} from 'react';  
import { AppRegistry, FlatList,  
	StyleSheet, Text, View,Alert, TouchableOpacity } from 'react-native';  
import useState from 'react';
  
//const [total,setTotal] = useState(0);

export default class FlatListBasics extends Component {  
    constructor(props){
        super(props);
		//console.log(this.props);
		global.SampleVar = 'This is Global Variable.';
		global.total = 0;
		global.count = 0;
        this.state = { total: 50}
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
	
	updateTotal = () => {

	}

    //handling onPress action  
    getListViewItem = (item) => { 
        console.log({total});
        this.setState({total: 100});
		//total = total + 25;
		Alert.alert(item.key); 
	}  

	//<Text style={styles.item}></Text> 

    render() {  
        return (  
            <View style={styles.container}> 
                 <Text style={styles.item}>Total: {this.state.total} Count:</Text> 

                <FlatList  
                    data={[  
                       // {key: 'Milk', cost: 4},{key: 'Bread', cost: 2}, {key: 'Cereal', cost: 3},{key: 'Coffee', cost: 4}  
						{key: 'Milk'}, {key: 'Bread'}
                    ]} 
                   
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
  