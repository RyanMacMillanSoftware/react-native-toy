import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { Icon } from 'react-native-elements';


export class ShoppingItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {key: this.props.name, name: this.props.name, description: this.props.description,
                        quantity: this.props.quantity, image: this.props.image};
    }

    editItem(newName, newDescription, newQuantity, newImage){
        this.setState(previousState => {
            return {name: newName, description: newDescription, quantity: newQuantity, image: newImage};
        });
    }

  render() {
    return (
        <View style={styles.container}>
            <Icon
                name='pencil'
                type='entypo'
                color='#477998'
                onPress={() => {
                    this.props.navigation.navigate('EditItem', {
                        item: this.state,
                    });
                }}
            />
            <Icon
                name='cross'
                type='entypo'
                color='#477998'
                onPress={() => console.log('Delete this')}
            />
            <Text>{this.state.name}</Text>
            <Text>{this.state.description}</Text>
            <Text>{this.state.quantity}</Text>
            <Text>{this.state.image}</Text>  
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

AppRegistry.registerComponent('ShoppingItem', () => ShoppingItem);