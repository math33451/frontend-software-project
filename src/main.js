import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TheMask from "vue-the-mask"
import money from 'v-money'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(TheMask);
Vue.use(money, {precision: 4});

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');