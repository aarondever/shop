<template>
    <div class="form-signin mx-auto">
        <form @submit.prevent="submitForm">
            <h1 class="h3 mb-3 fw-normal">Create an account</h1>

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

            <div class="mb-3">
                <label for="confirm_password" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="confirm_password" name="confirm_password"
                    placeholder="Confirm password" v-model="confirm_password">
            </div>

            <div class="alert alert-danger" role="alert" v-if="errors.length > 0">
                <p class="mb-1" v-for="error in errors">{{ error }}</p>
            </div>
            <button v-if="$store.state.isLoading" class="btn btn-primary w-100 py-2" type="button" disabled>
                <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                <span role="status">Loading...</span>
            </button>
            
            <button v-else class="btn btn-primary w-100 py-2" type="submit">Create account</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'RegisterView',
    data() {
        return {
            username: '',
            password: '',
            confirm_password: '',
            errors: []
        }
    },
    mounted() {
        document.title = 'Register | Shop'
    },
    methods: {
        async submitForm() {
            this.errors = [] // reset errors

            if (this.username === '') {
                this.errors.push('The username is missing!')
            }

            if (this.password === '') {
                this.errors.push('The password is missing!')
            }

            if (this.password !== this.confirm_password) {
                this.errors.push('The passwords does not match.')
            }

            if (this.errors.length === 0) {
                const formData = {
                    username: this.username,
                    password: this.password
                }

                this.$store.commit('setIsLoading', true)

                await axios.post('/api/users/', formData)
                    .then(response => {
                        this.$router.push('/sign-in')
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

                this.$store.commit('setIsLoading', false)
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
