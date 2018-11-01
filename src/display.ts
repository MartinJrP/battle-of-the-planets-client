import Vue from 'vue'
import AppDisplay from './AppDisplay.vue'

Vue.config.productionTip = false

import VueSocketio from 'vue-socket.io';
Vue.use(VueSocketio, 'http://socketserver.com:1923');

new Vue({
  render: h => h(AppDisplay)
}).$mount('#app')
