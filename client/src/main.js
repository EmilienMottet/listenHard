// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from '@/store/store'
import vmodal from 'vue-js-modal'
import APlayer from 'aplayer'

import 'aplayer/dist/APlayer.min.css'

Vue.prototype.$player = new Vuex.Store({
  strict: false,
  state: {
    player: null
  },
  mutations: {
    setPlayer (state) {
      if (state.player === null) {
        state.player = new APlayer({
          container: document.getElementById('aplayer'),
          audio: []
        })
      }
    },
    deletePlayer (state) {
      state.player.pause()
      state.player = null
    }
  },
  actions: {
    setPlayer ({commit}) {
      commit('setPlayer')
    },
    deletePlayer ({commit}) {
      commit('deletePlayer')
    }
  }
})

Vue.use(vmodal, { dynamic: true })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
