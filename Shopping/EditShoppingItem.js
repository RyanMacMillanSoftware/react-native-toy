import React from 'react';
import { AppRegistry } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';


export class EditShoppingItem extends React.Component {

    constructor(props){
        super(props);
    }

    editItem(newName, newDescription, newQuantity, newImage){
        //this.props.item.editItem(newName, newDescription, newQuantity, newImage);
    }

  render() {
      const { navigation } = this.props;
      const item = this.props.navigation.state.params.item;
      //console.log("name"+name);
    return (
        <View style={styles.container}>
            <Icon
            name='pencil'
            type='entypo'
            color='#477998'
            onPress={() => console.log('Edit this')}
            />
            <Icon
            name='cross'
            type='entypo'
            color='#477998'
            onPress={() => console.log('Delete this')}
            />
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>{item.quantity}</Text>
            <Text>{item.image}</Text>   
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#C4D6B0',
    borderColor: '#291F1E',
    borderStyle: 'solid',
    borderWidth: 2,
    
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});

AppRegistry.registerComponent('EditShoppingItem', () => EditShoppingItem);