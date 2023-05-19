import Vue from "vue"
import Router from "vue-router"


import Login from '@/views/usuario/LoginPage.vue'
import CadastroUsuario from '@/views/usuario/CadastroUsuario.vue'
import DashBoard from '@/views/usuario/DashBoard.vue'
import TelaInicial from '@/views/TelaInicial.vue'
import CadastroTicket from '@/views/ticket/CadastroTicket.vue'
import DescTicket from '@/views/ticket/DescTicket.vue'
import ListTicket from '@/views/ticket/ListTicket.vue'
import EstoquePeca from '@/views/estoquePecas/EstoquePeca.vue'
import CadastroPeca from '@/views/estoquePecas/CadastroPeca.vue'
import DescPeca from '@/views/estoquePecas/DescPeca.vue'
import ListBalanca from '@/views/balanca/ListBalanca.vue'
import CadastroBalanca from '@/views/balanca/CadastroBalanca.vue'
import DescBalanca from '@/views/balanca/DescBalanca.vue'

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

        {
            path: '/estoque',
            name: 'estoquePeca',
            component: EstoquePeca,
        },

        {
            path: '/cadastraPeca',
            name: 'cadastraPeca',
            component: CadastroPeca,
        },

        {
            path: '/estoque/:id',
            name: 'peca',
            component: DescPeca,
        },

        {
            path: '/balancas',
            name: 'balancas',
            component: ListBalanca,
        },

        {
            path: '/cadastraBalanca',
            name: 'cadastraBalanca',
            component: CadastroBalanca,
        },

        {
            path: '/balancas/:id',
            name: 'descBalanca',
            component: DescBalanca,
        },
    ]
})


export default router