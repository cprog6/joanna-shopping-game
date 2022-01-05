import React, { Component } from 'react';
import { View, Text} from 'react-native';
import MultiSelect from 'react-native-multiple-select';

console.log("Cart Entry")
const items = [{
    id: '92iijs7yta',
    name: 'Milk'
  }, {
    id: 'a0s0a8ssbsd',
    name: 'Jelly'
  }, {
    id: '16hbajsabsd',
    name: 'Bread'
  }, {
    id: 'nahs75a5sg',
    name: 'Bannas'
  }, {
    id: '667atsas',
    name: 'Toliet Paper'
  }, {
    id: 'hsyasajs',
    name: 'Doritos'
  }, {
    id: 'djsjudksjd',
    name: 'Eggs'
  }, {
    id: 'sdhyaysdj',
    name: 'Lettuc'
  }, {
    id: 'suudydjsjd',
    name: 'Cherrios'
    }
];

class ShoppingCartScreen extends Component {

  state = {
    selectedItems : []
  };

  
  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };

 
  render() {
    const { selectedItems } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <Text>Cart</Text>
        <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Pick Items"
          searchInputPlaceholderText="Search Items..."
          //onChangeInput={ (text)=> console.log(text)}
          altFontFamily=""
          //altFontFamily="ProximaNova-Light"
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="#CCC"
          submitButtonText="Submit"
          hideDropdown="true"

          //{this.multiSelect.getSelectedItemsExt(selectedItems)}

          //{this.multiSelect && this.multiSelect.getSelectedItemsExt(selectedItems)}
        />
        <View>

          {this.multiSelect}
        </View>
      </View>
    );
  }
}

export default ShoppingCartScreen;


