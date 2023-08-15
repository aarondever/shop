<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <header>
        <div class="welcome fl">欢迎来到美多商城!</div>
        <div class="fr">
            <div class="login_btn fl" v-if="username">
                欢迎您：<em>[[ username ]]</em>
                <span>|</span>
                <a href="/logout/" class="quit">退出</a>
            </div>
            <div class="login_btn fl" v-else>
                <a href="/login/">登录</a>
                <span>|</span>
                <a href="/register/">注册</a>
            </div>

            <div class="user_link fl">
                <span>|</span>
                <a href="/info/">用户中心</a>
                <span>|</span>
                <a href="/carts/">我的购物车</a>
                <span>|</span>
                <a href="/orders/info/1/">我的订单</a>
            </div>
        </div>
    </header>
</template>