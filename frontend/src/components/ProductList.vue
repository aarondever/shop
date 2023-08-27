<template>
    <ul class="list-group list-group-horizontal-lg gap-3">
        <li class="list-group-item border-0" v-for="product in productList" :key="product.id">
            <router-link v-bind:to="product.get_absolute_url"
                class="text-black link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">
                <img class="img-fluid img-thumbnail rounded" :src="product.get_thumbnail" alt="product_thumbnail">
                <h3 class="fs-5 text-truncate" style="max-width: 10rem;">{{ product.name }}</h3>
                <p class="fs-6">${{ product.price }}</p>
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'ProductList',
    props: {
        productList: []
    }
}
</script>