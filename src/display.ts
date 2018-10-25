import Vue from 'vue'
import AppDisplay from './AppDisplay.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(AppDisplay)
}).$mount('#app')
