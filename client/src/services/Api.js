import axios from 'axios'
import store from '@/store/store'

export default () => {
  return axios.create({
    baseURL: 'http://localhost:3000/v1/',
    headers: {
      Authorization: `Bearer ${store.state.token}`
    }
  })
}
