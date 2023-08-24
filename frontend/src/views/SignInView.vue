<template>
    <div class="form-signin mx-auto">
        <form @submit.prevent="submitForm">
            <h1 class="h3 mb-3 fw-normal">Sign In</h1>

            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" name="username" placeholder="Username"
                    v-model="username">
            </div>

            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" name="password" placeholder="Password"
                    v-model="password">
            </div>

            <div class="alert alert-danger" role="alert" v-if="errors.length > 0">
                <p class="mb-1" v-for="error in errors">{{ error }}</p>
            </div>

            <button class="btn btn-primary w-100 py-2" type="submit">Sign In</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SignInView',
    data() {
        return {
            username: '',
            password: '',
            errors: []
        }
    },
    mounted() {
        document.title = 'Sign In | Shop'
    },
    methods: {
        async submitForm() {
            this.errors = [] // reset errors

            if (this.username === '') {
                this.errors.push('The username is missing')
            }

            if (this.password === '') {
                this.errors.push('The password is missing')
            }

            if (this.errors.length === 0) {

                axios.defaults.headers.common['Authorization'] = ''

                localStorage.removeItem('token')

                const formData = {
                    username: this.username,
                    password: this.password
                }

                await axios.post('/api/token/login/', formData)
                    .then(response => {
                        const token = response.data.auth_token
                        this.$store.commit('setToken', token)
                        axios.defaults.headers.common['Authorization'] = 'Token ' + token
                        localStorage.setItem('token', token)

                        const toPath = this.$route.query.to || '/'
                        this.$router.push(toPath)
                    })
                    .catch(error => {
                        if (error.response) {
                            for (const property in error.response.data) {
                                this.errors.push(`${property}: ${error.response.data[property]}`)
                            }
                            console.log(JSON.stringify(error.response.data))
                        } else {
                            this.errors.push('Something went wrong. Please try again')
                            console.error(JSON.stringify(error))
                        }
                    })
            }
        }
    }
}
</script>

<style lang="scss">
.form-signin {
    max-width: 330px;
    padding: 1rem;
}
</style>
