import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import { View, Text } from 'react-native'
import HomeScreen from './HomeScreen'

const Stack = createStackNavigator();

const RootStack = (props) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
