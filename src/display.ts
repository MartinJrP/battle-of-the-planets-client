import Vue from 'vue'
import AppDisplay from './AppDisplay.vue'

Vue.config.productionTip = false

import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:8000'
}))

new Vue({
  render: h => h(AppDisplay)
}).$mount('#app')
