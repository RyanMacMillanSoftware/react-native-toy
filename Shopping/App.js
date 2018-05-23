import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import { ShoppingList } from './ShoppingList';
import { EditShoppingItem } from './EditShoppingItem';

export default class App extends React.Component {

  render() {
    return (
      <Screens />
    );
  }
}

const Screens = createStackNavigator({
  Home: { screen: ShoppingList },
  EditItem: { screen: EditShoppingItem },
},
{
  initialRouteName: 'Home',
}
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
