import Vue from "vue"
import Router from "vue-router"


import Login from '@/views/usuario/LoginPage.vue'
import DashBoard from '@/views/usuario/DashBoard.vue'
import TelaInicial from '@/views/TelaInicial.vue'
// import CadastroUsuario from '@/views/usuario/CadastroUsuario.vue'
// import CadastroTicket from '@/views/ticket/CadastroTicket.vue'
import DescMembro from '@/views/membro/DescMembro.vue'
import ListMembros from '@/views/membro/ListMembros.vue'
// import ListTicketCliente from '@/views/ticket/ListTicketCliente.vue'
// import EstoquePeca from '@/views/estoquePecas/EstoquePeca.vue'
// import CadastroPeca from '@/views/estoquePecas/CadastroPeca.vue'
// import DescPeca from '@/views/estoquePecas/DescPeca.vue'
// import ListBalanca from '@/views/balanca/ListBalanca.vue'
// import CadastroBalanca from '@/views/balanca/CadastroBalanca.vue'
// import DescBalanca from '@/views/balanca/DescBalanca.vue'
// import ListCliente from '@/views/cliente/ListCliente.vue'
// import DescCliente from '@/views/cliente/DescCliente.vue'

Vue.use(Router);

const router = new Router({
    routes: [

        {
            path: '/',
            name: 'telaInicial',
            component: TelaInicial,
        },

        {
            path: '/consultarMembros',
            name: 'listaMembros',
            component: ListMembros,
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
    
        // {
        //     path: '/cadastrarTicket',
        //     name: 'cadastrarTicket',
        //     component: CadastroTicket,
        // },
    
        // {
        //     path: '/cadastrarUsuario',
        //     name: 'cadastrarUsuario',
        //     component: CadastroUsuario,
        // },
    
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
    
        // {
        //     path: '/tickets',
        //     name: 'tickets',
        //     component: ListTicket,
        // },
    
        
        {
            path: '/membro/:id',
            name: 'membro',
            component: DescMembro,
        },

        // {
        //     path: '/estoque',
        //     name: 'estoquePeca',
        //     component: EstoquePeca,
        // },

        // {
        //     path: '/cadastraPeca',
        //     name: 'cadastraPeca',
        //     component: CadastroPeca,
        // },

        // {
        //     path: '/estoque/:id',
        //     name: 'peca',
        //     component: DescPeca,
        // },

        // {
        //     path: '/balancas',
        //     name: 'balancas',
        //     component: ListBalanca,
        // },

        // {
        //     path: '/cadastraBalanca',
        //     name: 'cadastraBalanca',
        //     component: CadastroBalanca,
        // },

        // {
        //     path: '/balancas/:id',
        //     name: 'descBalanca',
        //     component: DescBalanca,
        // },

        // {
        //     path: '/clientes',
        //     name: 'clientes',
        //     component: ListCliente,
        // },

        // {
        //     path: '/clientes/:id',
        //     name: 'descCliente',
        //     component: DescCliente,
        // },
    ]
})


export default router