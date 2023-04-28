import Vue from "vue"
import Router from "vue-router"


import Login from '@/views/usuario/LoginPage.vue'
import CadastroUsuario from '@/views/usuario/CadastroUsuario.vue'
import DashBoard from '@/views/usuario/DashBoard.vue'
import TelaInicial from '@/views/TelaInicial.vue'
import CadastroTicket from '@/views/ticket/CadastroTicket.vue'
import DescTicket from '@/views/ticket/DescTicket.vue'
import ListTicket from '@/views/ticket/ListTicket.vue'

Vue.use(Router);

const router = new Router({
    routes: [

        {
            path: '/',
            component: TelaInicial,
        },

        {
            path: '*',
            redirect: '/',
        },

        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashBoard,
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


export default router