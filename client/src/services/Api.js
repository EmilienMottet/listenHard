import axios from 'axios'
import store from '@/store/store'

export default () => {
  return axios.create({
    baseURL: process.env.API_URL || 'http://localhost:3000/v1/',
    headers: {
      Authorization: `${store.state.token}`
    }
  })
}
