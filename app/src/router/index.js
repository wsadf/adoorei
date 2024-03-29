import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: () => import('../views/Cadastro.vue')
  },
  {
    path: '/formulario',
    name: 'formulario',
    component: () => import('../views/Formulario.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && localStorage.getItem('token') === null) {
    return next('/login')
  }

  return next()
})

export default router