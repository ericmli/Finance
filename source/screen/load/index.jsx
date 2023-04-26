import React from 'react'
import { Container } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ActivityIndicator } from 'react-native'

export function Load({ navigation }) {
  React.useEffect(() => {
    // AsyncStorage.clear()
    autoLogin()
  }, [])

  async function autoLogin() {
    const token = await AsyncStorage.getItem('token')
    const newUser = await AsyncStorage.getItem('onboarding')

    if (newUser !== null) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }]
      })
      if (token !== null) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'SendHome' }]
        })
      }
    } else {
      navigation.navigate('Onboarding')
    }
  }

  return (
    <Container>
      <ActivityIndicator size="large" color="white" />
    </Container>
  )
}
