import React from 'react';
import { AppRegistry } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { ShoppingItem } from './ShoppingItem';

export class ShoppingList extends React.Component {

    static navigationOptions = {
        title: 'Shopping List',
    }
  render() {
    return (
    <View style={styles.container}>
        <View style={styles.container}>
            <ShoppingItem name='Apple' description='Red' quantity={2} image='imageurl' navigation={this.props.navigation}/>
            <ShoppingItem name='Banana' description='Yellow' quantity={2} image='imageurl'/>
        </View>
        <Icon          
          name= 'plus' 
          type= 'entypo'
          color= '#fff'
          containerStyle={{ backgroundColor: '#477998'}}
          raised  
          onPress={() => console.log('New item')}
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