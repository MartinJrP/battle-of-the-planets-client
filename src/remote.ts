import Vue from 'vue'
import AppRemote from './AppRemote.vue'

Vue.config.productionTip = false

import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:8000'
}))

new Vue({
  render: h => h(AppRemote)
}).$mount('#app')
