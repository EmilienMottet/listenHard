import Api from '@/services/Api'

export default {
  signup (credentials) {
    return Api().post('users', credentials)
  },
  register (credentials) {
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('users/login', credentials)
  }
}
