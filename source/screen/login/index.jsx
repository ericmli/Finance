import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Body, CheckRemember, Container, ContainerCheck, ContainerMain, ContainerRegister, ForgetPassword, Header, IconAdd, TextForget, TextHave, TextRemember, TextSign, TextSignIn, TextTop } from './styles'
import { Input, Password } from '../../component/input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button } from '../../component/button'
import api from '../../service'
import { AuthContext } from '../../service/auth'

export function Login({ navigation }) {
  const { login, notRememberLogin } = React.useContext(AuthContext)
  const [remember, setRemember] = React.useState(false)

  const schema = yup.object().shape({
    email: yup.string().email('E-mail Invalid').required('E-mail Address is Required'),
    password: yup.string().max(20, 'Exceeded the maximum Number').required('Password is required')
  })
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schema)
  })

  const onSubmit = async input => {
    const obj = {
      identifier: input.email,
      password: input.password
    }
    try {
      const response = await api.post('/auth/local', obj)
      if (remember) {
        login(response.data)
      } else {
        notRememberLogin(response.data)
      }
      navigation.reset({
        index: 0,
        routes: [{ name: 'SendHome' }]
      })
    } catch {
      alert('Login inválido.')
    }
  }

  return (
    <Container>
      <ContainerMain>

        <Header>
          <TextSign>Sign In</TextSign>
        </Header>

        <Body>
          <TextTop>Hi, Welcome Back!</TextTop>
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

          <ContainerCheck>
            <CheckRemember onPress={() => setRemember(!remember)}>
              {remember ? <IconAdd name='check' /> : null}
            </CheckRemember>
            <TextRemember>Remember Me</TextRemember>
            <ForgetPassword>
              <TextForget>Forget Password</TextForget>
            </ForgetPassword>
          </ContainerCheck>
          <Button onPress={handleSubmit(onSubmit)} name='Sign In' />

          <ContainerRegister>
            <TextHave>Don´t have an account?</TextHave>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}><TextSignIn>Sign Up</TextSignIn></TouchableOpacity>
          </ContainerRegister>
        </Body>
      </ContainerMain>
    </Container>
  )
}
