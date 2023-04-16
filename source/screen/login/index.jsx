import React from 'react'
import { Container, ContainerMain, Header, IconBorder, TextSign } from './styles'
import Icon from 'react-native-vector-icons/EvilIcons'

export function Login() {
  return (
    <Container>
      <ContainerMain>

      <Header>
        <IconBorder>
          <Icon name='chevron-left' size={50} color='black' />
        </IconBorder>
        <TextSign>Sign In</TextSign>
      </Header>

      </ContainerMain>
    </Container>
  )
}
