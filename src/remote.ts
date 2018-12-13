import Vue from 'vue'
import AppRemote from './AppRemote.vue'

Vue.config.productionTip = false

let connection = process.env.NODE_ENV === 'production' ?
  'https://battle-of-the-planets.herokuapp.com' :
  'http://localhost:8000'

import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  debug: true,
  connection: connection
}))

new Vue({
  render: h => h(AppRemote)
}).$mount('#app')
