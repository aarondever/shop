<template>
    <main class="form-signin mx-auto">
        <form>
            <h1 class="h3 mb-3 fw-normal">Create an account</h1>

            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" name="username" placeholder="Username">
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="Email address">
            </div>

            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" name="password" placeholder="Password">
            </div>

            <button class="btn btn-primary w-100 py-2" type="submit">Create account</button>
        </form>
    </main>
</template>

<style scoped>
.form-signin {
    max-width: 330px;
    padding: 1rem;
}
</style>