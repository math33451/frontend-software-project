import { createApp } from "vue"
import App from './App'
import { createRouter, createWebHistory } from "vue-router"


import Login from '@/views/usuario/LoginPage.vue'
import CadastroUsuario from '@/views/usuario/CadastroUsuario.vue'
import TelaInicial from '@/views/TelaInicial.vue'
import CadastroTicket from '@/views/ticket/CadastroTicket.vue'
import DescTicket from '@/views/ticket/DescTicket.vue'
import ListTicket from '@/views/ticket/ListTicket.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: '/home',
            name: 'telaInicial',
            component: TelaInicial,
        },
    
        {
            path: '/cadastrarTicket',
            name: 'cadastrarTicket',
            component: CadastroTicket,
        },
    
        {
            path: '/cadastrarUsuario',
            name: 'cadastrarUsuario',
            component: CadastroUsuario,
        },
    
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
    
        {
            path: '/tickets',
            name: 'tickets',
            component: ListTicket,
        },
    
        
        {
            path: '/ticket/:id',
            name: 'ticket',
            component: DescTicket,
        },
    ]
})


const app = createApp(App)
app.use(router)

export default router