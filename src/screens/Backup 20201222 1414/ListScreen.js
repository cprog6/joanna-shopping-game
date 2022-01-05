import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

class SelectableItem extends React.Component {
	constructor() {
	  super();
	  console.log("scale1");
	  this.handleOnPress = this.handleOnPress.bind(this);
	}
  
	shouldComponentUpdate(nextProps) {
	  const { isSelected } = this.props;
	  return isSelected !== nextProps.isSelected;
	}
  
	handleOnPress() {
	  const { onPress } = this.props;
	  onPress();
	}
  
	render() {
	  const { isSelected, text } = this.props;
	  const textColor = isSelected ? 'blue' : 'black';
  
	  return (
		<TouchableOpacity onPress={this.handleOnPress}>
		  <View>
			<Text style={{ color: textColor }}>{text}</Text>
		  </View>
		</TouchableOpacity>
	  );
	}
  }
 
  export default class SelectList extends React.Component {
	constructor() {
	  super();
	  console.log("rconst1");
	  //this.handleOnPressItem = this.handleOnPressItem.bind(this);
	  console.log("const2");
	  this.state = {
		selected: new Map(),
	  };
	  console.log(this.state);
	};
  
  	onPressItem(id) {
	  this.setState((state) => {
		const selected = new Map(state.selected);
		selected.set(id, !selected.get(id));
		return { selected };
	  });
	}
  
  
	renderItem({ item }) {
	  const { selected } = this.state;
   console.log("renderItem");
	  return (
		<SelectableItem
		  id={item.id}
		  onPressItem={this.handleOnPressItem}
		  selected={!!selected.get(item.id)}
		  title={item.title}
		/>
	  );
	}
  
  
	render() {
	  //const { data } = this.props;
	  console.log("re nder");
	
	  return (
		<FlatList
		  data={[{key: 'Milk', cost: 4}, {key: 'Bread', cost: 2}, {key: 'Cereal', cost: 5}]}         
		  //data={data}
//		  extraData={this.state}
		  keyExtractor={item => item.id}
		  renderItem={this.renderItem}
		/>
	  );
	}

  }

//export default ListScreen;