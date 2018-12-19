import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import blog from '@/views/blog'
//import services from '@/views/services'
import contact from '@/views/contact'

const routes = [
    
    {
        path: '/',
        name: 'blog',
        component: blog
    },
    {
        path: '/services',
        name: 'services',
        component: () => import('@/views/services')
    },
    {
        path: '/contact',
        name: 'contact',
        component: contact
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