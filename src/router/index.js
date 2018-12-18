import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '../views/layout/Layout'

const routes = [

    { path: '/404', component: () => import('@/views/404'), hidden: false },

    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        name: 'Dashboard',
        //hidden: false
        children: [{
            path: 'dashboard',
            component: () => import('@/views/dashboard/index')
        }]
    },

    {
        path: '/example',
        component: Layout,
        redirect: '/example/table',
        name: 'Example',
        meta: { title: 'Example', icon: 'example' },
    },

    {
        path: '/form',
        component: Layout,
    },

]

export default new VueRouter({
    routes // сокращённая запись для `routes: routes`
})