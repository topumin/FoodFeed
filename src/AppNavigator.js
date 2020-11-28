import React from 'react'
import { createStackNavigator } from '@react-navigatoion/stack'
import { View, Text } from 'react-native'
import HomeScreen from './HomeScreen'

const Stack = createStackNavigator();

const RootStack = function() {
    return(
        <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{gestureEnable: false}}
        >
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{title: Home}}
            />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default RootStack;