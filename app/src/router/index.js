import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import CartView from '@/views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('@/views/ProductView.vue')
    }
  ],
})

export default router
