import Vue from 'vue'
import AppDisplay from './AppDisplay.vue'

import store from './DisplayStore'

Vue.config.productionTip = false

import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:8000',
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
