import Vue from 'vue'
import App from './App.vue'
//import Ninjas from './Ninja.vue' --- globally
import store from './store'

Vue.config.productionTip = false
//Vue.component('ninjas', Ninjas) --- globally 

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
