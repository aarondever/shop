import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/signin',
    component: () => import('../views/SigninView.vue')
  },
  {
    path: '/register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/cart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/account',
    component: () => import('../views/AccountView.vue'),
    children: [{
      path: 'security',
      component: () => import('../components/Security.vue'),
    }, {
      path: 'orders',
      component: () => import('../components/Orders.vue'),
    }, {
      path: 'addresses',
      component: () => import('../components/Addresses.vue'),
    }]
  },
  {
    path: '/:category_slug/:product_slug',
    component: () => import('../views/ProductView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
