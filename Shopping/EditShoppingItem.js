import React from 'react';
import { AppRegistry, TextInput, Button, StyleSheet, Text, View, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import NumericInput from 'react-native-numeric-input';


export class EditShoppingItem extends React.Component {

    constructor(props){
        super(props);
        const item = this.props.navigation.state.params.item;
        this.state = {key: item.key, name: item.name, description: item.description, quantity: item.quantity, image: item.image};
    }

    componentWillReceiveProps(nextProps){
        if (typeof nextProps.navigation.state.params.photo !== 'undefined'){
          this.state = nextProps.navigation.state.params.state;
          this.setState({ image: nextProps.navigation.state.params.photo.uri});
        }
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
                style={{ borderColor: '#d9d9d9', borderWidth: 1, backgroundColor: '#f2f2f2' }}
                onChangeText={(text) => this.setState({ description: text })}
                value={this.state.description}
                multiline={true}
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
            
            <Text>Image URL</Text>
                <TextInput
                style={{borderColor: '#d9d9d9', borderWidth: 1, backgroundColor: '#f2f2f2'}}
                onChangeText = {(text) => this.setState({image: text})}
                />  
                <Image 
                style={{width: 100, height:100}}
                source = {{uri: this.state.image}}
                />
                <Button
                    onPress={() => {this.props.navigation.navigate('Camera', {returnScreen: 'EditItem', state: this.state});}}
                    title="OR TAKE PHOTO"
                />
            <Button
                onPress={() => {
                    if ((this.state.name == '') || (this.state.description == '') || (this.state.image == '')){
                        console.log('Invalid input')
                    } else{
                        this.props.navigation.navigate('Home', { command: 'Edit', key: this.state.key, name: this.state.name, description: this.state.description, quantity: this.state.quantity, image: this.state.image });
                    }
                }}
                title="SAVE CHANGES"
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