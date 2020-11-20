import { createRouter, createWebHashHistory } from 'vue-router'
import Start from '../views/Start.vue'

const routes = [{
        path: '/',
        name: 'Start',
        component: Start
    },
    {
        path: '/Planeteninfo/:planetname',
        name: 'Planeteninfo',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Planeteninfo.vue')
    },
    {
        path: '/MeineSammlung',
        name: 'Sammlung',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/MeineSammlung.vue')
    },
    {
        path: '/End',
        name: 'End',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/End.vue')
    },
    {
        path: '/Entdecken',
        name: 'Entdecken',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../components/Entdecken.vue')
    },
    {
        path: '/Walking',
        name: 'Walking',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Walking.vue')
    },
    {
        path: '/showmap',
        name: 'map',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../components/Map.vue')
    },
    {
        path: '/impressum',
        name: 'Impressum',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../components/Impressum.vue')
    },
    {
        path: '/unlock/:planetname',
        name: 'unlock',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../components/unlockPopup.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router