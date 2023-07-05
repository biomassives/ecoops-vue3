import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/checkin',
      name: 'checkin',
      component: () => import('../views/CheckinView.vue')
    },
    {
      path: '/get-started',
      name: 'getstarted',
      component: () => import('../views/GetstartedView.vue')
    },
    {
      path: '/supporters',
      name: 'supporters',
      component: () => import('../views/SupportersView.vue')
    }
  ]
})

export default router
