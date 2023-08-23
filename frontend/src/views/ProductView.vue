<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-9">
                <figure class="figure">
                    <img :src="product.get_image" class="figure-img img-fluid rounded" alt="...">
                </figure>
                <h1 class="title">{{ product.name }}</h1>
                <p>{{ product.description }}</p>
            </div>
            <div class="col-3">
                <h2 class="subtitle mb-5">Information</h2>
                <p class="mb-5">
                    <string>Price: ${{ product.price }}</string>
                </p>
                <div class="input-group mb-5">
                    <input type="number" class="form-control form-control-sm" min="1" v-model="quantity">
                    <button class="btn btn-dark" @click="addToCart">Add to cart</button>
                </div>
            </div>
        </div>
        <div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div id="cart-toast" class="toast text-bg-success" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="2000">
                <div class="d-flex">
                    <div class="toast-body">
                        The product was added to the cart
                    </div>
                    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'bootstrap'

export default {
    name: 'ProductView',
    data() {
        return {
            product: {},
            quantity: 1
        }
    },
    mounted() {
        this.getProduct()
    },
    methods: {
        async getProduct() {
            this.$store.commit('setIsLoading', true)

            const category_slug = this.$route.params.category_slug
            const product_slug = this.$route.params.product_slug

            await axios.get(`/api/products/${category_slug}/${product_slug}`)
                .then(response => {
                    this.product = response.data
                    document.title = this.product.name + ' | Shop'
                }).catch(error => {
                    console.error(error)
                })
            
            this.$store.commit('setIsLoading', false)
        },
        addToCart() {
            if (isNaN(this.quantity) || this.quantity < 1) {
                this.quantity = 1
            }

            const item = {
                product: this.product,
                quantity: this.quantity
            }

            this.$store.commit('addToCart', item)

            const toastEl = this.$el.querySelector('#cart-toast')
            const toast = new Toast(toastEl)
            toast.show()
        }
    }
}
</script>