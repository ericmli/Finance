import React from 'react'
import { FlatList } from 'react-native'
import { BckCard, Body, Container, ContainerBalance, ContainerCard, ContainerIcon, ContainerMoney, ContainerVisa, Header, IconAdd, Image, Messages, Money, MoneyBalance, MoneySecure, Name, NameCard, NameContainer, NumberCard, TypeMoney, Welcome } from './styles'
// import api from '../../service'
import AsyncStorage from '@react-native-async-storage/async-storage'
import SvgBell from '../../image/Bell'
import SvgVisa from '../../image/Visa'
import { formatMoney, lastNumber, showCard } from './formatMoney'

const DATA = [
  {
    id: 1,
    title: 'Inline',
    bck: '#4F3D56',
    money: '12312.32',
    card: 2468246824682468
  },
  {
    id: 2,
    title: 'Premium',
    bck: '#160E2C',
    money: '136.92',
    card: 7897789778977897
  }
]

export function Home() {
  const [name, setName] = React.useState([])
  const [hide, setHide] = React.useState(true)
  React.useEffect(() => {
    search()
  }, [])

  async function search() {
    setName(await AsyncStorage.getItem('name'))
  }

  const listAdd = ({ item }) => (
    <ContainerCard>
      <BckCard color={item.bck}>
        <NameCard>{item.title}</NameCard>
        <ContainerVisa>
          <SvgVisa />
        </ContainerVisa>

        <ContainerMoney>
          <TypeMoney>Balance</TypeMoney>
          <Money>
            {hide ? '***' : `$${formatMoney(item.money)}`}
          </Money>
          <NumberCard>
            {hide ? `**** ${lastNumber(item.card)}` : showCard(item.card)}
          </NumberCard>
        </ContainerMoney>
      </BckCard>
    </ContainerCard>
  )
  return (
    <Container>
      <Body>
        <Header>
          <Image source={{ uri: 'https://pbs.twimg.com/media/FfjFkgqWIAES1-A.jpg:large' }} />
          <NameContainer>
            <Welcome>Welcome Back,</Welcome>
            <Name>{name}</Name>
          </NameContainer>
          <Messages>
            <SvgBell />
          </Messages>
        </Header>
        <ContainerBalance>
          <MoneyBalance>{hide ? <MoneySecure>SECURE</MoneySecure> : '$543,732,789,90'} </MoneyBalance>
          <ContainerIcon onPress={() => setHide(!hide)}>
            {hide ? <IconAdd name='eye' /> : <IconAdd name='eye-slash' />}
          </ContainerIcon>
        </ContainerBalance>
      </Body>
      <FlatList
        data={DATA}
        pagingEnabled
        decelerationRate='fast'
        renderItem={listAdd}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

    </Container>
  )
}
