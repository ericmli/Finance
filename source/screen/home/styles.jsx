import styled from 'styled-components'
import { Theme } from '../../theme'
import Icon from 'react-native-vector-icons/FontAwesome5'

export const Container = styled.View`
  background: ${Theme.colors.white[10]};
  flex: 1;
`

export const Body = styled.View`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`

export const Header = styled.View`
  flex-direction: row;
  height: 70px;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
`

export const Image = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 50px;
`
export const NameContainer = styled.View`
  right: 40px;
`

export const Name = styled.Text`
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  color: #252525
`
export const Welcome = styled.Text`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #9CA4AB;
`

export const Messages = styled.TouchableOpacity`
  height: 70%;
  width: 50px;
  border-width: 0.5px;
  border-color: ${Theme.colors.black[30]};
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`

export const ContainerCard = styled.View`
  padding: 20px;
`

export const BckCard = styled.View`
  width: 327px;
  height: 223px;
  border-radius: 16px;
  background: ${(props) => props.color};
  padding: 20px;
`
export const NameCard = styled.Text`
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  color: #FFF
`

export const ContainerVisa = styled.View`
  position: absolute;
  right: 20px;
  top: 20px;
  align-items: flex-end ;
`

export const ContainerMoney = styled.View`
  top: 20%;
`

export const TypeMoney = styled.Text`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: ${Theme.colors.white[30]};
`

export const Money = styled.Text`
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: ${Theme.colors.white[10]};
`

export const NumberCard = styled.Text`
  top: 50%;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${Theme.colors.white[30]};
`

export const ContainerIcon = styled.TouchableOpacity`
  width: 24px;
`

export const IconAdd = styled(Icon)`
  color: black;
  font-size: 20px;
`

export const ContainerBalance = styled.View`
  padding-top: 10px;
  flex-direction: row;
  gap: 10px;
`

export const MoneySecure = styled.Text`
    height: 100%;
    width: 60px;
    background: #000000;
  `

export const MoneyBalance = styled.Text`
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: black;
  text-align: center;
`
