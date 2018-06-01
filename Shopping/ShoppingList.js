import React from 'react';
import { AppRegistry } from 'react-native';
import { StyleSheet, Text, View, FlatList, SectionList, AsyncStorage } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { ShoppingItem } from './ShoppingItem';

var shoppingList = [ { key: 'Apple', name: 'Apple', description: 'Green', quantity: 2, image: 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fshopping-1d837c02-1641-4163-930f-7d216154bb5b/Camera/5d885f95-8259-4972-8a51-36b6eb914ada.jpg'}, 
                  { key: 'Banana', name: 'Banana', description: 'Yellow', quantity: 3, image: 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fshopping-1d837c02-1641-4163-930f-7d216154bb5b/Camera/5d885f95-8259-4972-8a51-36b6eb914ada.jpg'} ];


export class ShoppingList extends React.Component {

    state = {
        shopping: ''
    }

  constructor(props){
      super(props);
        AsyncStorage.getItem('shopping').then((value) => {
            console.log("value: " + value);
            if (value == null) {
                console.log("Here");
                this.setState({ shopping: shoppingList });
            }
            else {
                this.setState({ shopping: JSON.parse(value) });
            }
        });

  }

  componentWillReceiveProps(nextProps) {
    if (typeof nextProps.navigation.state.params !== "undefined"){
      const command = nextProps.navigation.state.params.command ;
      if(command === "New" || command === "Edit"){
        let foundMatch = false;
        for(index in this.state.shopping){
          if (this.state.shopping[index].key === nextProps.navigation.state.params.key){
            foundMatch = true;
            //console.log("oldImage: "+this.state.shopping[index].image);
            this.state.shopping.splice(index,1);
            //console.log("newImage: "+nextProps.navigation.state.params.image);
            this.state.shopping.push({ key: nextProps.navigation.state.params.name, name: nextProps.navigation.state.params.name, description: nextProps.navigation.state.params.description, quantity: nextProps.navigation.state.params.quantity, image: nextProps.navigation.state.params.image });
            //console.log("newSavedImage: "+this.state.shopping[this.state.shopping.length-1].image);            
          }
        }
        if (foundMatch === false){ 
          this.state.shopping.push({ key: nextProps.navigation.state.params.key, name: nextProps.navigation.state.params.name, description: nextProps.navigation.state.params.description, quantity: nextProps.navigation.state.params.quantity, image: nextProps.navigation.state.params.image });
        }
      }
      else if (command === "Delete"){
        for(index in this.state.shopping){
          if (this.state.shopping[index].key === nextProps.navigation.state.params.item.key){
            this.state.shopping.splice(index,1)
          }
        }
      }
      }
    try {
        AsyncStorage.setItem('shopping', JSON.stringify(this.state.shopping));
    }
    catch (error) {
        console.log("set data error: " + error);
    }
  }

  render() {
    return (
    <View style={styles.container}>
      <FlatList
        data = {this.state.shopping}
        extraData={Math.random()}
        renderItem={({item, index}) => <ShoppingItem index={index} name={item.name} description={item.description} quantity={item.quantity} image={item.image} navigation={this.props.navigation}/>}
      />
        <Icon          
          name= 'plus' 
          type= 'entypo'
          color= '#fff'
          containerStyle={{ backgroundColor: '#477998'}}
          raised  
          onPress={() => this.props.navigation.navigate('NewItem')}
        />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    borderColor: '#000'
  },
});

AppRegistry.registerComponent('ShoppingList', () => ShoppingList);