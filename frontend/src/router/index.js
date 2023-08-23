import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('../views/SigninView.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../views/AccountView.vue'),
    children: [{
      path: 'security',
      name: 'AccountSecurity',
      component: () => import('../components/Security.vue'),
    }, {
      path: 'orders',
      name: 'AccountOrders',
      component: () => import('../components/Orders.vue'),
    }, {
      path: 'addresses',
      name: 'AccountAddresses',
      component: () => import('../components/Addresses.vue'),
    }]
  },
  {
    path: '/:category_slug/:product_slug',
    name: 'Product',
    component: () => import('../views/ProductView.vue'),
  },
  {
    path: '/:category_slug',
    name: 'Category',
    component: () => import('../views/CategoryView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
