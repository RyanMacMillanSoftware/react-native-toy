import React from 'react';
import { AppRegistry } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';


export class EditShoppingItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {item: this.props.item};
    }

    editItem(newName, newDescription, newQuantity, newImage){
        this.props.item.editItem(newName, newDescription, newQuantity, newImage);
    }

  render() {
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
            <Text>{this.state.item.name}</Text>
            <Text>{this.state.item.description}</Text>
            <Text>{this.state.item.quantity}</Text>
            <Text>{this.state.item.image}</Text>   
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});

AppRegistry.registerComponent('EditShoppingItem', () => EditShoppingItem);