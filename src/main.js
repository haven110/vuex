import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from '../src/store/store'
// import axios from 'axios'



// Vue.config.productionTip = false
// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/"
Vue.prototype.http = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
