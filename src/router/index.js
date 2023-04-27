import Vue from 'vue'
import VueRouter from 'vue-router'
import { requiredAuth } from './autentication';


import Login from '@/views/usuario/Login.vue'
import CadastroUsuario from '@/views/usuario/CadastroUsuario.vue'
import TelaInicial from '@/views/TelaInicial.vue'
import CadastroTicket from '@/views/ticket/CadastroTicket.vue'
import DescTicket from '@/views/ticket/DescTicket.vue'
import ListTicket from '@/views/ticket/ListTicket.vue'

Vue.useAttrs(VueRouter)

const routes = [

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
        beforeEnter: requiredAuth,
    },

    {
        path: '/tickets',
        name: 'tickets',
        component: ListTicket,
        beforeEnter: requiredAuth,
    },

    
    {
        path: '/ticket/:id',
        name: 'ticket',
        component: DescTicket,
        beforeEnter: requiredAuth,
    },


]


const router = new VueRouter({
    base: process.env.BASE-URL,
    routes
})

export default router