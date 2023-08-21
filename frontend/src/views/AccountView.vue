<script setup>
import { RouterView } from 'vue-router'
import { RouterLink } from 'vue-router'
</script>

<template>
    <main>
        <div class="container my-5">
            <div class="row justify-content-between">
                <div class="col-2">
                    <h5 class="text-center mb-4">Your Account</h5>
                    <ul class="nav nav-pills flex-column text-center gap-3">
                        <li class="nav-item">
                            <RouterLink class="nav-link active" aria-current="page" to="/account/security">Login & security</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/account/orders">Your Orders</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/account/addresses">Your Addresses</RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="col-9">
                    <RouterView />
                </div>
            </div>
        </div>
    </main>
</template>