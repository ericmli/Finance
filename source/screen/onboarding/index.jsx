import React from 'react'
import { Body, Container, ContainerWoman, Text, Title } from './styles'
import SvgCircle from '../../image/Circle'
import SvgWomanOne from '../../image/WomenOne'
import SvgWomenTwo from '../../image/WomenTwo'
import SvgWomenTree from '../../image/WomenTree'
import { Radio } from '../../component/radio'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function OnboardingOne() {
  const [focus, setFocus] = React.useState(null)
  useFocusEffect(
    React.useCallback(() => {
      setFocus(1)
    }, [])
  )
  return (
    <Container >
      <SvgCircle />
      <Body>
        <Title>The best app for manage your finance</Title>
        <Text>Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem semper parturient. </Text>
        <Radio value={focus} />
      </Body>
      <ContainerWoman>
        <SvgWomanOne />
      </ContainerWoman>
    </Container>
  )
}

export function OnboardingTwo() {
  const [focus, setFocus] = React.useState(null)
  useFocusEffect(
    React.useCallback(() => {
      setFocus(2)
    }, [])
  )
  return (
    <Container>
      <SvgCircle />
      <Body>
        <Title>Simple and easy to control your money</Title>
        <Text>Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem semper parturient. </Text>
        <Radio value={focus} />
      </Body>
      <ContainerWoman>
        <SvgWomenTwo />
      </ContainerWoman>
    </Container>
  )
}

export function OnboardingTree() {
  const [focus, setFocus] = React.useState(null)
  useFocusEffect(
    React.useCallback(() => {
      setFocus(3)
    }, [])
  )

  return (
    <Container >
      <SvgCircle />
      <Body>
        <Title>Your savings are safe by smat invest</Title>
        <Text>Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem semper parturient. </Text>
        <Radio value={focus} />
      </Body>
      <ContainerWoman>
        <SvgWomenTree />
      </ContainerWoman>
    </Container>
  )
}

export function OnboardingFor({ navigation }) {
  useFocusEffect(
    React.useCallback(() => {
      AsyncStorage.setItem('onboarding', 'true')
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }]
      })
    }, [])
  )
  return (
    <Container />
  )
}
