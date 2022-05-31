import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import department from "../components/department.vue";
import employee from "../components/employee.vue";


import recruit from "../components/recruit.vue";
import apply from "../components/apply.vue";
Vue.use(VueRouter)




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    name: "employee",
    component: employee,
    path: "/employee",
  },
  {
    name: "department",
    component: department,
    path: "/department",
  },
  {
    name: "apply",
    component: apply,
    path: "/apply",
  },
  {
    name: "recruit",
    component: recruit,
    path: "/recruit",
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

