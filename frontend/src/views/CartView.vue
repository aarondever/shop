<template>
    <main>
        <div class="container my-5">
            <h3 class="mb-3">Shopping Cart</h3>
            <ul class="list-group">
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-1 position-relative">
                            <input class="form-check-input position-absolute top-50 start-50 translate-middle"
                                type="checkbox" value="">
                        </div>
                        <div class="col-3">
                            <img src="" alt="">
                        </div>
                        <div class="col">
                            <a href="#" class="text-decoration-none text-black fs-3">item detail</a>
                            <p class="fw-bold fs-5">$99</p>
                            <div class="row justify-content-start">
                                <div class="col-1 d-none d-lg-block me-3">
                                    Quantity:
                                </div>
                                <div class="col">
                                    <div class="btn-toolbar">
                                        <div class="input-group">
                                            <button class="input-group-text" id="basic-addon1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                                </svg>
                                            </button>
                                            <input type="text" class="form-control-sm text-center w-25" value="1">
                                            <button class="input-group-text" id="basic-addon1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
                                                    </path>
                                                </svg>
                                            </button>
                                            <div class="btn-group">
                                                <button class="btn btn-danger btn-sm ms-3">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </main>
</template>