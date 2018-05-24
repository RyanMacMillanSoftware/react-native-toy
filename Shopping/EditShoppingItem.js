import React from 'react';
import { AppRegistry, TextInput, Button, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import NumericInput from 'react-native-numeric-input';


export class EditShoppingItem extends React.Component {

    constructor(props){
        super(props);
        const item = this.props.navigation.state.params.item;
        this.state = {key: item.key, name: item.name, description: item.description, quantity: item.quantity, image: item.image};
    }
  render() {
    return (
        <View style={styles.container}>
            <Text>Name</Text>
            <TextInput
            style={{borderColor: '#d9d9d9', borderWidth: 1, backgroundColor: '#f2f2f2'}}
            onChangeText = {(text) => this.setState({name: text})}
            value={this.state.name}
            />  
            
            <Text>Description</Text>
            <TextInput
            style={{borderColor: '#d9d9d9', borderWidth: 1, backgroundColor: '#f2f2f2'}}
            onChangeText = {(text) => this.setState({description: text})}
            value={this.state.description}
            />  
            
            <Text>Quantity</Text>
            <NumericInput
            //style={{borderColor: '#d9d9d9', borderWidth: 1, backgroundColor: '#f2f2f2'}}
            onChange = {(value) => {
                if (value < 1){
                    value = 1;
                }
                this.setState({quantity: value})
            }}
            value={this.state.quantity}
            /> 
            
            <Text>Image</Text>
            <TextInput
            style={{borderColor: '#d9d9d9', borderWidth: 1, backgroundColor: '#f2f2f2'}}
            onChangeText = {(text) => this.setState({image: text})}
            value={this.state.image}
            /> 
            <Button
                onPress={() => {
                    if ((this.state.name == '') || (this.state.description == '') || (this.state.image == '')){
                        console.log('Invalid input')
                    } else{
                        this.props.navigation.navigate('Home', {key: this.state.key,name: this.state.name, description: this.state.description, quantity: this.state.quantity, image: this.state.image });
                    }
                }}
                title="EDIT ITEM"
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    // backgroundColor: '#C4D6B0',
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