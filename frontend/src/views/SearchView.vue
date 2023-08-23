<template>
    <div class="container my-5">
        <h1>Search</h1>
        <h2 class="fs-5 mb-3 text-body-secondary">Search term: "{{ query }}"</h2>
        <ProductList v-bind:productList="products" />
    </div>
</template>

<script>
import axios from 'axios'
import ProductList from '@/components/ProductList.vue'

export default {
    name: 'SearchView',
    data() {
        return {
            products: [],
            query: ''
        }
    },
    components: {
        ProductList
    },
    mounted() {
        document.title = 'Search | Shop'

        let uri = window.location.search.substring(1)
        let params = new URLSearchParams(uri)

        if (params.get('query')){
            // get query from uri
            this.query = params.get('query')
            this.performSearch()
        }
    },
    methods: {
        async performSearch(){
            this.$store.commit('setIsLoading', true)

            await axios.post('/api/products/search/', {'query': this.query})
            .then(response => {
                this.products = response.data
            })
            .catch(error => {
                console.error(error)
            })

            this.$store.commit('setIsLoading', false)
        }
    }
}
</script>