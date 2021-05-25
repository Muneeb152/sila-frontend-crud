import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
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
    path: '/Donor',
    name: 'Donor',
    component: () => import("@/views/Donor.vue"),
  },
  {
  path: "/dashboard",
  name: "Dashboard",
  component: () => import("../views/Dashboard.vue"),
  children: [
    {
      path: "/dashboard",
      name: "dashboard home",
      component: () => import("@/views/DashboardHome.vue"),
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
