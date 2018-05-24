import React from 'react';
import { AppRegistry } from 'react-native';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { ShoppingItem } from './ShoppingItem';

var shoppingList = [ {key: 'Apple', name: 'Apple', description: 'Green', quantity: 2, image: 'image'}, 
                  {key: 'Banana',name: 'Banana', description: 'Yellow', quantity: 3, image: 'imageurl' } ];

export class ShoppingList extends React.Component {

  constructor(props){
    super(props);
    this.state = {shopping: shoppingList, refresh: false}
  }

  render() {
    if (typeof this.props.navigation.state.params !== "undefined"){
      let foundMatch = false;
      for(index in this.state.shopping){
        if (this.state.shopping[index].key === this.props.navigation.state.params.key){
          foundMatch = true;
          this.state.shopping[index] = ({key: this.state.shopping[index].key, name: this.props.navigation.state.params.name, description: this.props.navigation.state.params.description, quantity: this.props.navigation.state.params.quantity, image: this.props.navigation.state.params.image });
          this.state.refresh = !this.state.refresh;
        }
      }
      if (foundMatch === false){
        this.state.shopping.push({key: this.props.navigation.state.params.key, name: this.props.navigation.state.params.name, description: this.props.navigation.state.params.description, quantity: this.props.navigation.state.params.quantity, image: this.props.navigation.state.params.image });
        this.state.refresh = !this.state.refresh;
      }
    }
    console.log("refresh:" + JSON.stringify(this.state.refresh))
    console.log("shopping:"+ JSON.stringify(this.state.shopping))
    return (
    <View style={styles.container}>
      <FlatList
        data = {this.state.shopping}
        extraData={this.state.refresh}
        renderItem={({item}) => <ShoppingItem name={item.name} description={item.description} quantity={item.quantity} image={item.image} navigation={this.props.navigation}/>}
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