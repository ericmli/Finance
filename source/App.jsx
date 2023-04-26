import React from 'react'
import MyStack from './route'
import AuthProvider from './service/auth'

export default function App() {
  return (
    <AuthProvider>
      <MyStack/>
    </AuthProvider>
  )
}
