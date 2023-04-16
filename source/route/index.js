import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Login } from '../screen/login'
import { Register } from '../screen/register'

const Stack = createNativeStackNavigator()

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: 'blue'
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back'
}

export default function MyStack () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
