<template>
    <div class="container my-5">
        <h3 class="mb-3">Thank you!</h3>
        <p>Your order will be processed within 48 hours</p>
    </div>
</template>

<script>
export default {
    name: 'SuccessView',
    mounted() {
        document.title = 'Success | Shop'
    }
}
</script>