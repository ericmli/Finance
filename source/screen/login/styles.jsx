import styled from 'styled-components/native'
import { Theme } from '../../theme'

export const Container = styled.View`
  flex: 1;
  background: ${Theme.colors.white[10]};
`

export const Header = styled.View`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

export const IconBorder = styled.View`
  width: 50px;
  height: 50px;
  border-width: 0.4px;
  border-color: ${Theme.colors.black[30]};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerMain = styled.View`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
`

export const TextSign = styled.Text`
  color: ${Theme.colors.black[20]};
  font-size: 18px;
  margin-right: 40%;
  font-weight: 600;
`
