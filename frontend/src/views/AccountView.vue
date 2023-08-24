<template>
    <div class="container my-5">
        <div class="row justify-content-between">
            <div class="col-2">
                <h5 class="text-center mb-4">Your Account</h5>
                <ul class="nav nav-pills flex-column text-center gap-3">
                    <li class="nav-item">
                        <router-link class="nav-link" :class="{active: $route.name === 'AccountSecurity'}" to="/account/security">Account Detail</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :class="{active: $route.name === 'AccountOrders'}" to="/account/orders">Your Orders</router-link>
                    </li>
                    <!-- <li class="nav-item">
                        <router-link class="nav-link" to="/account/addresses">Your Addresses</router-link>
                    </li> -->
                </ul>
            </div>
            <div class="col">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AccountView'
}
</script>