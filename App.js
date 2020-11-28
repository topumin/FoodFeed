import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/AppNavigator'

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    )
  }
}

export default App
