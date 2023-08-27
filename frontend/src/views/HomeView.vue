<template>
  <div class="container my-5">
    <div class="row justify-content-start">
      <div class="col-2"><router-link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-shop"
            viewBox="0 0 16 16">
            <path
              d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
          </svg>
        </router-link>
      </div>
      <div class="col-10 col-lg-8">
        <form method="get" action="/search">
          <div class="input-group rounded">
            <span class="input-group-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                viewBox="0 0 16 16">
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
            <input type="text" class="form-control" name="query" placeholder="Search for products" />
            <button type="submit" class="btn btn-primary">Search</button>
          </div>
        </form>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-12 col-lg-2 mb-3">
        <h5 class="text-center">Category</h5>
        <ul class="nav">
          <li class="nav-item" v-for="category in categories" :key="category.id">
            <router-link class="nav-link" :to="category.get_absolute_url">{{ category.name }}</router-link>
          </li>
        </ul>
      </div>
      <div class="col-12 col-lg-8">
        <div id="carouselIndicators" class="carousel slide bg-secondary" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" aria-label="Slide 1"
              class="active" aria-current="true"></button>
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item" :class="{ active: index === 0 }" data-bs-interval="5000"
              v-for="(product, index) in latestProducts" :key="product.id">
              <router-link v-bind:to="product.get_absolute_url">
                <img :src="product.get_image" width="800" height="400" class="d-block w-100 object-fit-scale"
                  alt="product_image">
              </router-link>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <div class="row my-5">
      <div class="mb-3">
        <div class="d-flex">
          <div class="pe-4">
            <h2 class="fs-4 fw-bold">
              Latest Products:
            </h2>
          </div>
        </div>
      </div>
      <ProductList v-bind:productList="latestProducts" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import ProductList from '@/components/ProductList.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      latestProducts: [],
      categories: []
    }
  },
  components: {
    ProductList
  },
  mounted() {
    this.getLatestProducts()
    this.getCategories()

    document.title = 'Home | Shop'
  },
  methods: {
    async getLatestProducts() {
      this.$store.commit('setIsLoading', true)

      await axios.get('/api/latest-products')
        .then(response => {
          this.latestProducts = response.data
        })
        .catch(error => {
          console.error(error)
        })

      this.$store.commit('setIsLoading', false)

    },
    getCategories() {
      axios.get('/api/categories')
      .then(response => {
        this.categories = response.data
      })
      .catch(error => {
        console.error(error)
      })
    }
  }
}
</script>
