<template>
    <div class="container my-5">
        <h3 class="mb-3">Shopping Cart</h3>
        <ul class="list-group" v-if="cartTotalLength > 0">
            <li class="list-group-item" v-for="item in cart.items" :key="item.product.id">
                <div class="row">
                    <div class="col-3">
                        <router-link :to="item.product.get_absolute_url">
                            <img :src="item.product.get_thumbnail" alt="product_thumbnail"
                                class="img-fluid rounded mx-auto d-block">
                        </router-link>
                    </div>
                    <div class="col">
                        <router-link :to="item.product.get_absolute_url"
                            class="text-break fs-3 text-black link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">{{
                                item.product.name }}</router-link>
                        <p class="fs-5 mt-3">${{ getItemTotal(item).toFixed(2) }}</p>
                        <div class="input-group" style="max-width: 15rem;">
                            <input type="number" class="form-control form-control-sm" min="1" v-model="item.quantity"
                                @change="updateCart()">
                            <button class="btn btn-danger" @click="removeFromCart(item)">Remove</button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <p class="fs-4 text-center" v-else>You Cart is empty.</p>
        <div class="mt-3 text-end" v-if="cartTotalLength > 0">
            <span class="fs-3 align-middle me-3 lh-lg">Subtotal ({{ cartTotalLength }} items): ${{ cartTotalPrice.toFixed(2)
            }}</span>
            <router-link class="btn btn-info btn-lg" to="/cart/checkout">Check out</router-link>
        </div>
    </div>
</template>

<script>

export default {

    name: 'CartView',
    data() {
        return {
            cart: {
                items: []
            }
        }
    },
    mounted() {
        this.cart = this.$store.state.cart
    },
    computed: {
        cartTotalLength() {
            return this.cart.items.reduce((acc, curVal) => acc += curVal.quantity, 0)
        },
        cartTotalPrice() {
            return this.cart.items.reduce((acc, curVal) => acc += curVal.quantity * curVal.product.price, 0)
        }
    },
    methods: {
        getItemTotal(item) {
            return item.quantity * item.product.price
        },
        updateCart() {
            localStorage.setItem('cart', JSON.stringify(this.$store.state.cart))
        },
        removeFromCart(item) {
            this.cart.items = this.cart.items.filter(i => i.product.id !== item.product.id)
            this.updateCart()
        }
    }
}
</script>