import Vue from "vue"
import Router from "vue-router"


import Login from '@/views/usuario/LoginPage.vue'
import DashBoard from '@/views/usuario/DashBoard.vue'
import TelaInicial from '@/views/TelaInicial.vue'
import DescMembro from '@/views/membro/DescMembro.vue'
import ListMembros from '@/views/membro/ListMembros.vue'
import NovoPagamento from '@/views/pagamento/NovoPagamento.vue'
import ListPagamento from '@/views/pagamento/ListPagamentos.vue'
import DescPagamento from '@/views/pagamento/DescricaoPagamento.vue'

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
    
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        
        {
            path: '/membro/:id',
            name: 'membro',
            component: DescMembro,
        },
        
        {
            path: '/pagamento',
            name: 'pagamento',
            component: NovoPagamento,
        },

        {
            path: '/listaPagamento',
            name: 'listaPagamento',
            component: ListPagamento,
        },

        {
            path: '/pagamento/:id',
            name: 'descricaoPagamento',
            component: DescPagamento,
        },
    ]
})


export default router