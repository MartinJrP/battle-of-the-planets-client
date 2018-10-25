import Vue from 'vue'
import AppRemote from './AppRemote.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(AppRemote)
}).$mount('#app')
