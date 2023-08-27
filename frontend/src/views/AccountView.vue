<template>
    <div class="container my-5">
        <div class="row justify-content-lg-between justify-content-center">
            <div class="col-6 col-lg-2 mb-3 text-center">
                <h5 class="mb-4">Your Account</h5>
                <ul class="nav nav-pills flex-column gap-3">
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
            <div class="col-12 col-lg-10">
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