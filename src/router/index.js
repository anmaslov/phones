import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import calls from '@/views/calls'
//import services from '@/views/services'
import contact from '@/views/contact'

const routes = [
    {
        path: '/',
        name: 'Звонки',
        component: calls,
        icon: 'el-icon-menu'
    },
    {
        path: '/phones',
        name: 'Тел. Станции',
        component: () => import('@/views/phones'),
        icon: 'el-icon-menu'
    },
    {
        path: '/contact',
        name: 'Обратная связь',
        component: contact,
        icon: 'el-icon-menu'
    },

    /*{
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        name: 'Dashboard',
        children: [{
            path: 'dashboard',
            component: () => import('@/views/dashboard/index')
        }]
    },*/

]

export default new VueRouter({
    routes // сокращённая запись для `routes: routes`
})