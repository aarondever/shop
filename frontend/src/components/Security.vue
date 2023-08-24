<template>
    <div class="w-75 mx-auto">
        <h3 class="mb-3">Account Detail</h3>
        <ul class="list-group mb-3">
            <li class="list-group-item">
                <div class="row">
                    <div class="col">
                        <label for="username" class="fw-bold">Username:</label>
                        <p class="fs-6 fw-normal">{{ username }}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Security',
    data() {
        return {
            username: ''
        }
    },
    mounted() {
        document.title = 'Account | Detail | Shop'

        this.username = localStorage.getItem('username')

    },
}
</script>