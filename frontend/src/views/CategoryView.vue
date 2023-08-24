<template>
    <div class="container my-5">
        <h2 class="fs-2 text-center mb-3">{{ category.name }}</h2>
        <ProductList v-bind:productList="category.products" />
    </div>
</template>

<script>
import axios from 'axios'
import ProductList from '@/components/ProductList.vue'

export default {
    name: 'CategoryView',
    data() {
        return {
            category: {
                products: []
            }
        }
    },
    components: {
        ProductList
    },
    mounted() {
        document.title = 'Category | Shop'
        
        this.getCategory()
    },
    watch: {
        $route(to, from) {
            if (to.name === 'Category') {
                // route to Category
                this.getCategory()
            }
        }
    },
    methods: {
        async getCategory() {
            const categorySlug = this.$route.params.category_slug

            this.$store.commit('setIsLoading', true)

            await axios.get(`/api/products/${categorySlug}`)
                .then(response => {
                    this.category = response.data

                    document.title = this.category.name + ' | Shop'
                })
                .catch(error => {
                    console.error(error)
                })

            this.$store.commit('setIsLoading', false)
        }
    }
}

</script>