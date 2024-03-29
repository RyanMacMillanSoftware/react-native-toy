import React from 'react';
import { AppRegistry, StyleSheet, Image, Text, View, Button } from 'react-native';
import { Icon } from 'react-native-elements';


export class ShoppingItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {index: this.props.index, key: this.props.name, name: this.props.name, description: this.props.description,
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
                        command: 'Edit',
                        item: this.state,
                    });
                }}
            />
            <Icon
                name='cross'
                type='entypo'
                color='#477998'
                onPress={() => {
                    this.props.navigation.navigate('Home', {
                        command: 'Delete',
                        item: this.state,
                    });
                }}
            />
            <Text style={{fontWeight: 'bold'}}>{this.state.name}</Text>
            <Text>{this.state.description}</Text>
            <Text>x{this.state.quantity}</Text>
            <Image 
                style={{width: 100, height:100}}
                source = {{uri: this.state.image}}
            /> 
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: '#C4D6B0',
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