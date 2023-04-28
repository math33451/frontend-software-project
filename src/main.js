import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router';
  
const app = createApp(App)

app.use(VueRouter)



app.mount('#app')