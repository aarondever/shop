<template>
    <div class="w-75 mx-auto">
        <h3 class="mb-3">Your Orders</h3>
        <div class="border border-secondary rounded-3 p-3 table-responsive">
            <table class="table caption-top align-middle" v-for="order in orders">
                <caption>Order #{{ order.id }}</caption>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in order.items" :key="item.product.id">
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
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Orders',
    data() {
        return {
            orders: []
        }
    },
    mounted() {
        document.title = 'Account | Orders | Shop'

        this.getOrders()
    },
    methods: {
        async getOrders() {
            this.$store.commit('setIsLoading', true)

            axios.get('/api/orders')
                .then(response => {
                    this.orders = response.data
                })
                .catch(error => {
                    console.error(error)
                })

            this.$store.commit('setIsLoading', false)

        },
        getItemTotal(item) {
            return item.quantity * item.product.price
        }
        
    }
}
</script>