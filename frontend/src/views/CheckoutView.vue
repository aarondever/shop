<template>
    <div class="container my-5">
        <h3 class="mb-3">Checkout</h3>
        <table class="table align-middle">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr v-for="item in cart.items" :key="item.product.id">
                    <th scope="row">
                        <img :src="item.product.get_thumbnail" alt="product_thumbnail"
                            class="img-fluid rounded mx-auto d-block">
                    </th>
                    <td class="text-break" style="max-width: 8rem;">{{ item.product.name }}</td>
                    <td>${{ item.product.price }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>${{ getItemTotal(item) }}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th scope="row"></th>
                    <td>Total</td>
                    <td></td>
                    <td>{{ cartTotalLength }}</td>
                    <td>${{ cartTotalPrice }}</td>
                </tr>
            </tfoot>
        </table>
        <div class="my-5">
            <h4 class="mb-3">Shipping Details</h4>
            <p class="text-secondary">* All fields are required</p>
        </div>
        <form @submit.prevent="submitForm">
            <div class="row g-3">
                <div class="col-md-6">
                    <label for="first-name" class="form-label">First name *</label>
                    <input type="text" class="form-control" v-model="first_name">
                </div>
                <div class="col-md-6">
                    <label for="last-name" class="form-label">Last name *</label>
                    <input type="text" class="form-control" v-model="last_name">
                </div>
                <div class="col-md-6">
                    <label for="email" class="form-label">Email Address *</label>
                    <input type="email" class="form-control" v-model="email">
                </div>
                <div class="col-md-6">
                    <label for="phone" class="form-label">Phone *</label>
                    <input type="text" class="form-control" v-model="phone">
                </div>
                <div class="col-md-6">
                    <label for="address" class="form-label">Address *</label>
                    <input type="text" class="form-control" v-model="address">
                </div>
                <div class="col-md-6">
                    <label for="zip-code" class="form-label">Zip code *</label>
                    <input type="text" class="form-control" v-model="zipcode">
                </div>
                <div class="col-md-6">
                    <label for="place" class="form-label">Place *</label>
                    <input type="text" class="form-control" v-model="place">
                </div>
                <div class="col-12">
                    <div class="alert alert-danger" role="alert" v-if="errors.length > 0">
                        <p class="mb-1" v-for="error in errors">{{ error }}</p>
                    </div>
                </div>
                <template v-if="cartTotalLength > 0">
                    <div class="col-12">
                        <button type="submit" class="btn btn-lg btn-dark">Pay with Stripe</button>
                    </div>
                </template>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'CheckoutView',
    data() {
        return {
            cart: {
                items: []
            },
            stripe: {},
            card: {},
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            address: '',
            zipcode: '',
            place: '',
            errors: [],
        }
    },
    mounted() {
        document.title = 'Checkout | Shop'

        this.cart = this.$store.state.cart
    },
    methods: {
        getItemTotal(item) {
            return item.quantity * item.product.price
        },
        submitForm() {
            this.errors = []

            if (this.first_name === '') {
                this.errors.push('The first name field is missing!')
            }

            if (this.last_name === '') {
                this.errors.push('The last name field is missing!')
            }

            if (this.email === '') {
                this.errors.push('The email field is missing!')
            }

            if (this.phone === '') {
                this.errors.push('The phone field is missing!')
            }

            if (this.address === '') {
                this.errors.push('The address field is missing!')
            }

            if (this.zipcode === '') {
                this.errors.push('The zipcode field is missing!')
            }

            if (this.place === '') {
                this.errors.push('The place field is missing!')
            }

        }
    },
    computed: {
        cartTotalLength() {
            return this.cart.items.reduce((acc, curVal) => acc += curVal.quantity, 0)
        },
        cartTotalPrice() {
            return this.cart.items.reduce((acc, curVal) => acc += curVal.quantity * curVal.product.price, 0)
        }
    }
}
</script>