<template>
  <header>
    <nav class="navbar navbar-expand-lg sticky-top border-bottom">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          Shop
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"
          aria-controls="#offcanvas">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvas"
          aria-labelledby="offcanvasLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="#offcanvasLabel">Shop</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav flex-row flex-wrap ms-lg-auto gap-lg-3">

              <template>
                <li class="nav-item col-6 col-lg-auto"><a class="nav-link" href="#">Hello: </a>
                </li>
                <li class="nav-item col-6 col-lg-auto"><a class="nav-link" href="#">Logout</a></li>
                <li class="nav-item py-2 py-lg-1 col-12 col-lg-auto">
                  <div class="vr d-none d-lg-flex h-100 mx-lg-2"></div>
                  <hr class="d-lg-none my-2">
                </li>
              </template>

              <template>
                <li class="nav-item col-6 col-lg-auto">
                  <router-link class="nav-link" to="/signin">Sign In</router-link>
                </li>
                <li class="nav-item col-6 col-lg-auto">
                  <router-link class="nav-link" to="/register">Register</router-link>
                </li>
                <li class="nav-item py-2 py-lg-1 col-12 col-lg-auto">
                  <div class="vr d-none d-lg-flex h-100 mx-lg-2"></div>
                  <hr class="d-lg-none my-2">
                </li>
              </template>

              <li class="nav-item col-6 col-lg-auto">
                <router-link class="nav-link" to="/account/security">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person"
                    viewBox="0 0 16 16">
                    <path
                      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                  Account
                </router-link>
              </li>
              <li class="nav-item col-6 col-lg-auto">
                <router-link class="nav-link" to="/account/orders">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-card-list" viewBox="0 0 16 16">
                    <path
                      d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                    <path
                      d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                  </svg>
                  Orders
                </router-link>
              </li>
              <li class="nav-item col-6 col-lg-auto">
                <router-link class="nav-link" to="/cart">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart"
                    viewBox="0 0 16 16">
                    <path
                      d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                  Cart <span class="text-danger-emphasis">({{ cartTotalLength }})</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <div class="d-flex justify-content-center" v-if="$store.state.isLoading">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <main>
    <router-view />
  </main>
  <footer class="py-3 my-4">
    <div class="footer-bottom text-center border-top pt-3">
      © Copyright 2023. Made by
      <a class="link-dark link-offset-2 link-underline-opacity-50 link-underline-opacity-100-hover" ref="noreferrer"
        target="_blank" href="https://aaronhong.net">Aaron Hong</a>
    </div>
  </footer>
</template>

<script>

export default {
  data() {
    return {
      cart: {
        items: []
      }
    }
  },
  beforeCreate() {
    this.$store.commit('initializeStore')
  },
  mounted() {
    this.cart = this.$store.state.cart
  },
  computed: {
    cartTotalLength() {

      return this.cart.items.reduce((acc, curVal) => acc + curVal.quantity, 0)

    }
  }
}
</script>

<style lang="scss"></style>
