import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// Install BootstrapVue
Vue.use(BootstrapVue)


new Vue({
  store: store, 
  el: '#app',
  render: h => h(App)
})
