import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'SignIn',
        component: () => import("@/views/SignIn.vue"),
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: () => import("@/views/SignUp.vue"),
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("../views/Dashboard.vue"),
        children: [{
                path: "/dashboard",
                name: "dashboard Home",
                component: () => import("../views/DashboardHome.vue"),
            },
            {
                path: '/users',
                name: 'Donor',
                component: () => import("@/views/Users.vue"),
            },

        ],
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router