import React, { createContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null)

  async function login(token) {
    setToken(token)
    AsyncStorage.setItem('token', token.jwt)
    AsyncStorage.setItem('name', token.user.username)
    AsyncStorage.setItem('email', token.user.email)
    AsyncStorage.setItem('cpf', token.user.cpf)
  }

  async function notRememberLogin(token) {
    setToken(token)
    AsyncStorage.setItem('name', token.user.username)
    AsyncStorage.setItem('email', token.user.email)
    AsyncStorage.setItem('cpf', token.user.cpf)
  }

  const logout = () => {
    setToken(null)
    AsyncStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ token, login, logout, notRememberLogin }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
