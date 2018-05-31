import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// import APlayer from 'aplayer'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState()
  ],
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
    // player: null
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    }
    // setPlayer (state) {
    //   if (state.player === null) {
    //     state.player = new APlayer({
    //       container: document.getElementById('aplayer'),
    //       audio: [{
    //         name: 'BITOCUL',
    //         url: 'http://freesound.org/data/previews/316/316830_4939433-lq.mp3'
    //       }]
    //     })
    //   }
    // },
    // changePlaylist (state, playlistsongs) {
    //   // state.player
    //   console.log('todo')
    // }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    }
    // setPlayer ({commit}) {
    //   commit('setPlayer')
    // }
  }
})
