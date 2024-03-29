import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import { ShoppingList } from './ShoppingList';
import { EditShoppingItem } from './EditShoppingItem';
import { NewShoppingItem } from './NewShoppingItem';
import { CameraComponent } from './CameraComponent'

export default class App extends React.Component {

  render() {
    return (
      <Screens />
    );
  }
}

const Screens = createStackNavigator({
  Home: { 
    screen: ShoppingList,
    title: 'Shopping List'
   },
  EditItem: { 
    screen: EditShoppingItem,
    title: 'Edit Item'
   },
  NewItem: { 
     screen: NewShoppingItem,
     title: 'New Item'
    },
Camera: {
    screen: CameraComponent,
    title: 'Take a photo'
    },
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
