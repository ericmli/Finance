import styled from 'styled-components/native'
import { Theme } from '../../theme'
import Icon from 'react-native-vector-icons/FontAwesome5'

export const Container = styled.View`
  flex: 1;
  background: ${Theme.colors.white[10]};
`

export const Header = styled.View`
  height: 100px;
  width: 100%;
  align-items: flex-end;
  justify-content: center;
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

export const Body = styled.View`
  width: 100%;
`

export const TextTop = styled.Text`
  color: ${Theme.colors.black[20]};
  width: 100%;
  font-weight: 600;
  font-size: 24px;
`

export const ContainerCheck = styled.View`
  margin-top: 10px;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

`

export const CheckRemember = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  border-width: 1px;
  border-color: black;
  border-radius: 5px;
`

export const TextRemember = styled.Text`
  color: black;
  font-weight: 600;
`

export const IconAdd = styled(Icon)`
  font-size: 10px;
  width: 100%;
  height: 52px;
  text-align: center;
  margin-top: 6px;
`

export const ForgetPassword = styled.TouchableOpacity`
  position: absolute;
  right: 0;
`

export const TextForget = styled.Text`
  color: ${Theme.colors.purple[10]};
  font-weight: 500;
  font-size: 14px;
`

export const ContainerRegister = styled.View`
  position: static;
  margin-top: 10px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  gap: 5px;
  margin-top: 50%;
`
export const TextHave = styled.Text`
  font-weight: 500;
  font-size: 16px;
  color: ${Theme.colors.black[30]};
`

export const TextSignIn = styled.Text`
  color: #2B7979;
  font-weight: 500;
  font-size: 16px;
`
