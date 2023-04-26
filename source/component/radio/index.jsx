import React from 'react'
import { Container, RadioOne, RadioTree, RadioTwo } from './styles'

export function Radio(value) {
  return (
    <Container>
      <RadioOne value={value.value === 1}></RadioOne>
      <RadioTwo value={value.value === 2}></RadioTwo>
      <RadioTree value={value.value === 3}></RadioTree>
    </Container>
  )
}
