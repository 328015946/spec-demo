import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomePage.vue'
import AuthView from '../views/AuthView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: AuthView,
      props: { mode: 'login' }
    },
    {
      path: '/register',
      name: 'register',
      component: AuthView,
      props: { mode: 'register' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/company',
      name: 'company',
      component: () => import('../views/CompanyView.vue')
    },
    {
      path: '/personnel',
      name: 'personnel',
      component: () => import('../views/PersonnelView.vue')
    }
  ]
})

export default router
