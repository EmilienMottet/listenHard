// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/store'
import vmodal from 'vue-js-modal'

import 'aplayer/dist/APlayer.min.css'

var ap = 'TEST'

Vue.prototype.$player = ap

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
