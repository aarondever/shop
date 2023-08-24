import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: () => import('../views/SignInView.vue')
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
    path: '/search',
    name: 'Search',
    component: () => import('../views/SearchView.vue')
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../views/AccountView.vue'),
    meta: {
      requireLogin: true
    },
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    // to sign in page if not log in
    next({ name: 'SignIn', query: { to: to.path } })
  } else {
    next()
  }
})

export default router
