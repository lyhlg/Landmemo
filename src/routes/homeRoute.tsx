import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../components/Home';
import AddScreen from '../components/Add';

const Stack = createStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Add" component={AddScreen} />
    </Stack.Navigator>
  );
}

export default HomeStackScreen;
