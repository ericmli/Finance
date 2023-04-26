import styled from 'styled-components'
import { Theme } from '../../theme'
import Icon from 'react-native-vector-icons/FontAwesome5'

export const View = styled.View`
  position: relative;
`

export const TextInput = styled.TextInput`
  width: 100%;
  border-width: 1px;
  border-color: ${Theme.colors.black[30]};
  text-align: left;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  padding-left: 10px;
  background: ${Theme.colors.white[10]};
  height: 52px;
`

export const TextError = styled.Text`
  font-size: 12px;
  color: red;
`
export const TextTopInput = styled.Text`
  margin-top: 20px;
  font-weight: 600;
  font-size: 14px;
  top: 10px;
  color: ${Theme.colors.black[10]};
  margin-bottom: 10px;
`

export const ContainerIcon = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  margin-right: 15px;
  top: 75px;
`

export const IconAdd = styled(Icon)`
  color: #000;
  font-size: 20px;
`
