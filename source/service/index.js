import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const api = axios.create({
  baseURL: 'http://192.168.1.245:1337/api/',
  timeout: 5000
})

api.interceptors.request.use(async (config) => {
  const useStorage = await AsyncStorage.getItem('token')
  const data = JSON.parse(useStorage)
  if (!data) return config
  if (config?.headers) {
    config.headers = { Authorization: `Bearer ${data.token}` }
  }
  return config
})

// Incerceptor request - token
// Incerceptor response - trata token 'If(error)'

export default api
