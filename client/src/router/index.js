import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {
  getToken
} from '../utils/auth'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/register/Signup.vue'),
    meta: {
      isPublic: true,
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Login.vue'),
    meta: {
      isPublic: true,
    }
  },
  {
    path: '*',
    component: () => import('../views/404/404.vue'),
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // console.log(getToken() !== undefined))
  if (!to.meta.isPublic && (!getToken() || getToken() === undefined) && to.path !== '/signup' && to.path !== '/login') next('/login')
  else if (getToken() !== undefined && (to.path === '/signup' || to.path === '/login')) next('/')
  else next()
})
export default router
