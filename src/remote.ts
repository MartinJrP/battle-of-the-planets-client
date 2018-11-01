import Vue from 'vue'
import AppRemote from './AppRemote.vue'

Vue.config.productionTip = false

import VueSocketio from 'vue-socket.io';
import socket from 'socket.io-client'

Vue.use(VueSocketio, socket());

new Vue({
  render: h => h(AppRemote)
}).$mount('#app')
