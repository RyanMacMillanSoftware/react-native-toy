import React from 'react';
import { AppRegistry, TextInput, StyleSheet, Text, View, Button, CameraRoll } from 'react-native';
import { Icon } from 'react-native-elements';
import NumericInput from 'react-native-numeric-input';
import shopping from './ShoppingList';


export class NewShoppingItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {name: '', description: '', quantity: 1, image: ''}
    }

    render() {
        return (
            
                <View style={styles.container}>
                    <Text>Name</Text>
                    <TextInput
                    style={{borderColor: '#d9d9d9', borderWidth: 1, backgroundColor: '#f2f2f2'}}
                    onChangeText = {(text) => this.setState({name: text})}
                    />  
                    
                    <Text>Description</Text>
                    <TextInput
                    style={{borderColor: '#d9d9d9', borderWidth: 1, backgroundColor: '#f2f2f2'}}
                    onChangeText = {(text) => this.setState({description: text})}
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
                    />  
                    {/* <Button
                        onPress={() => {
                            CameraRoll.getPhotos({
                              first: 1,
                              assetType: 'All'
                            })
                            .then(r => { 
                                this.setState({ image: r.edges })
                                console.log(this.state.image);                            
                            })
                          }}
                        title="ADD IMAGE"
                    /> */}
                    <Button
                        onPress={() => {
                            if ((this.state.name == '') || (this.state.description == '') || (this.state.image == '')){
                                console.log('Invalid input')
                            } else{
                                
                                this.props.navigation.navigate('Home', {key: this.state.name,name: this.state.name, description: this.state.description, quantity: this.state.quantity, image: this.state.image });
                            }
                        }}
                        title="ADD ITEM"
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