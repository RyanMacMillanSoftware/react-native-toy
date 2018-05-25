import React from 'react';
import { AppRegistry } from 'react-native';
import { StyleSheet, Text, View, FlatList, SectionList } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { ShoppingItem } from './ShoppingItem';

var sectionShoppingList = [ { title: 'Apple', key: 'Apple', data: [{ name: 'Apple', description: 'Green', quantity: 2, image: 'image'}]}, 
                  { title: 'Banana', key: 'Banana', data: [{name: 'Banana', description: 'Yellow', quantity: 3, image: 'imageurl' }]} ];

var shoppingList = [ { key: 'Apple', name: 'Apple', description: 'Green', quantity: 2, image: 'image'}, 
                  { key: 'Banana', name: 'Banana', description: 'Yellow', quantity: 3, image: 'imageurl'} ];


export class ShoppingList extends React.Component {

  constructor(props){
    super(props);
    this.state = {shopping: shoppingList, refresh: false}
  }

  componentWillReceiveProps(nextProps){
    console.log("RECIEVE PROPS")
    console.log("props:" + JSON.stringify(nextProps))
    if (typeof nextProps.navigation.state.params !== "undefined"){
      this.setState(state => {
        return {refresh: !state.refresh};
      });
      const command = nextProps.navigation.state.params.command ;
      console.log("COMMAND: "+command)
      if(command === "New" || command === "Edit"){
        console.log("NEW")
        let foundMatch = false;
        for(index in this.state.shopping){
          if (this.state.shopping[index].key === nextProps.navigation.state.params.key){
            foundMatch = true;
            this.state.shopping.splice(index,1);
            this.state.shopping.push({ key: nextProps.navigation.state.params.key, name: nextProps.navigation.state.params.name, description: nextProps.navigation.state.params.description, quantity: nextProps.navigation.state.params.quantity, image: nextProps.navigation.state.params.image });
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
      console.log("Done recieving. What is returned?")
      console.log("refresh:" + JSON.stringify(this.state.refresh))
      console.log("shopping:"+ JSON.stringify(this.state.shopping))
    }
  }

  render() {
    return (
    <View style={styles.container}>
    {console.log("and now to render it: "+ JSON.stringify(this.state.shopping))
    }
      <FlatList
        data = {this.state.shopping}
        extraData={Math.random()}
        renderItem={({item, index}) => <ShoppingItem index={index} name={item.name} description={item.description} quantity={item.quantity} image={item.image} navigation={this.props.navigation}/>}
      />
      {/* <SectionList
      
        sections={ this.state.shopping }
        renderItem={({item, section}) => <ShoppingItem name={item.name} description={item.description} quantity={item.quantity} image={item.image} navigation={this.props.navigation}/>}
        // renderSectionHeader={({section: {title}}) => (
        //   <Text style={{fontWeight: 'bold'}}>{title}</Text>
        // )}
        keyExtractor={(item, index) => item.key}
      /> */}
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