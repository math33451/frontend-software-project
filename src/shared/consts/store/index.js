import { createApp } from 'vue'
import App from './App.vue'
import Vuex from 'vuex';

const app = createApp(App)

app.use(Vuex);

export default new Vuex.Store({
})