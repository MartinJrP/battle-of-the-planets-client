import Vue from 'vue'
import AppDisplay from './AppDisplay.vue'

import store from './DisplayStore'

Vue.config.productionTip = false

import VueSocketIO from 'vue-socket.io'
import VueTypedJs from 'vue-typed-js'

let connection = process.env.NODE_ENV === 'production' ?
  'https://battle-of-the-planets.herokuapp.com' :
  'http://localhost:8000'

Vue.use(VueTypedJs)
Vue.use(new VueSocketIO({
  debug: true,
  debug: process.env.NODE_ENV != 'production',
  connection: connection,
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
}))

new Vue({
  render: h => h(AppDisplay),
  store: store
}).$mount('#app')
