<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-md sticky-top border-bottom">
            <div class="container">
                <a class="navbar-brand" href="#">
                    Shop
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"
                    aria-controls="#offcanvas">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvas"
                    aria-labelledby="offcanvasLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="#offcanvasLabel">Shop</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav flex-row flex-wrap ms-md-auto gap-md-3">

                            <template v-if="username">
                                <li class="nav-item col-6 col-md-auto"><a class="nav-link" href="#">Hello: {{ username
                                }}</a>
                                </li>
                                <li class="nav-item col-6 col-md-auto"><a class="nav-link" href="#">Logout</a></li>
                                <li class="nav-item py-2 py-lg-1 col-12 col-lg-auto">
                                    <div class="vr d-none d-lg-flex h-100 mx-lg-2"></div>
                                    <hr class="d-lg-none my-2">
                                </li>
                            </template>

                            <template v-else>
                                <li class="nav-item col-6 col-md-auto"><a class="nav-link" href="#">Login</a></li>
                                <li class="nav-item col-6 col-md-auto"><a class="nav-link" href="#">SignUp</a></li>
                                <li class="nav-item py-2 py-lg-1 col-12 col-lg-auto">
                                    <div class="vr d-none d-lg-flex h-100 mx-lg-2"></div>
                                    <hr class="d-lg-none my-2">
                                </li>
                            </template>

                            <li class="nav-item col-6 col-md-auto">
                                <a class="nav-link" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-person" viewBox="0 0 16 16">
                                        <path
                                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                    </svg>
                                    Account
                                </a>
                            </li>
                            <li class="nav-item col-6 col-md-auto">
                                <a class="nav-link" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-card-list" viewBox="0 0 16 16">
                                        <path
                                            d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                        <path
                                            d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                                    </svg>
                                    Orders
                                </a>
                            </li>
                            <li class="nav-item col-6 col-md-auto">
                                <a class="nav-link" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-cart" viewBox="0 0 16 16">
                                        <path
                                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>
                                    Cart
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
</header></template>