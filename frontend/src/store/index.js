import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: {
      items: [],
    },
    isAuthenticated: false,
    token: '',
    isLoading: false
  },
  getters: {
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('cart')) {
        state.cart = JSON.parse(localStorage.getItem('cart'))
      } else {
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }
    },
    addToCart(state, item) {
      // use to check if item is exists in the cart
      const exists = state.cart.items.filter(i => i.product.id === item.product.id)

      if (exists.length > 0) {
        // item exists in the cart
        exists[0].quantity = parseInt(exists[0].quantity) + parseInt(item.quantity)
      } else {
        state.cart.items.push(item)
      }

      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    setIsLoading(state, status) {
      state.isLoading = status
    }
  },
  actions: {
  },
  modules: {
  }
})
