import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Body, Container, ContainerMain, ContainerTerms, Header, IconBorder, LearnTerms, TextSign, TextTerms, TextTermsBold, TextTop } from './styles'
import { Input, Password } from '../../component/input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button } from '../../component/button'
import Icon from 'react-native-vector-icons/EvilIcons'
import api from '../../service'

export function Register({ navigation }) {
  const schema = yup.object().shape({
    name: yup.string().required('Username Required'),
    email: yup.string().email('E-mail Invalid').required('E-mail Address is Required'),
    password: yup.string().max(20, 'Exceeded the maximum Number').required('Password is required')
  })
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    },
    resolver: yupResolver(schema)
  })

  const onSubmit = async input => {
    const obj = {
      name: input.name,
      email: input.email,
      password: input.password,
      status: true
    }
    try {
      const response = await api.post('users', obj)
      if (response.data.length !== 0) {
        navigation.navigate('Login')
      } else {
        alert('E-mail or Password Invalid')
      }
    } catch (error) {
      alert(error)
    }
  }
  return (
    <Container>
      <ContainerMain>

        <Header>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconBorder>
              <Icon name='chevron-left' size={50} color='black' />
            </IconBorder>
          </TouchableOpacity>
          <TextSign>Sign Up</TextSign>
        </Header>

        <Body>
          <TextTop>Create Account</TextTop>
          <Input
            name="name"
            nameTop='Full Name'
            placeholder='Enter your Name'
            control={control}
            errors={errors}
          />

          <Input
            name="email"
            nameTop='E-mail Address'
            placeholder='Enter your E-mail Address'
            control={control}
            errors={errors}
          />

          <Password
            name="password"
            nameTop='Password'
            placeholder='Enter your Password'
            control={control}
            errors={errors}
          />
        </Body>
        <Button onPress={handleSubmit(onSubmit)} name='Create An Account' />
        <ContainerTerms>
          <TextTerms>By signing up you agree to our
            <LearnTerms onPress={() => alert('Termos')}>
              <TextTermsBold> Terms and Conditions of Use</TextTermsBold>
            </LearnTerms>
          </TextTerms>
        </ContainerTerms>
      </ContainerMain>
    </Container>
  )
}
