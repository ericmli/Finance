import styled from 'styled-components'
import { Theme } from '../../theme'

export const Container = styled.View`
  flex: 1;
  background: ${Theme.colors.purple[10]};
`

export const ContainerWoman = styled.View`
  position: absolute;
  right: 0;
  bottom: 0;
`

export const Body = styled.View`
  position: absolute;
  width: 90%;
  left: 5%;
  top: 5%;
`

export const Title = styled.Text`
  width: 80% ;
  color: ${Theme.colors.white[10]};
  font-weight: 600;
  font-size: 35px;
  line-height: 36px;
`

export const Text = styled.Text`
  width: 70%;
  top: 5%;
  color: ${Theme.colors.white[30]};
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`
