import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
  
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter)
Vue.use(VueRouter)


var VueCookie = require('vue-cookie');
Vue.use(VueCookie);

new Vue({
  router,
  template: '<router-view/>',
  render: h => h(App)
}).$mount('#app')