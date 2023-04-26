import styled from 'styled-components/native'
import { Theme } from '../../theme'

export const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: 56px;
  background: ${Theme.colors.purple[10]};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const ButtonText = styled.Text`
  color: ${Theme.colors.white[10]};
  font-weight: 700;
  font-size: 16px;
`
