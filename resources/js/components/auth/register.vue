<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
                <div class="card shadow-sm my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="login-form">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Register</h1>
                                    </div>
                                    <form class="user" @submit.prevent="signup">
                                        <div class="form-group">
                                            <input v-model="form.name" type="text" class="form-control" id="exampleInputFirstName"
                                                   placeholder="Enter Your Name">
                                        </div>
                                        <div class="form-group">
                                            <input v-model="form.email" type="email" class="form-control" id="exampleInputEmail"
                                                   aria-describedby="emailHelp"
                                                   placeholder="Enter Email Address">
                                        </div>
                                        <div class="form-group">
                                            <input v-model="form.password" type="password" class="form-control" id="exampleInputPassword"
                                                   placeholder="Password">
                                        </div>
                                        <div class="form-group">
                                            <input v-model="form.password_confirmation" type="password" class="form-control" id="exampleInputPasswordRepeat"
                                                   placeholder="Repeat Password">
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary btn-block">Register</button>
                                        </div>
                                        <hr>
                                    </form>
                                    <hr>
                                    <div class="text-center">
                                        <router-link to="/" class="font-weight-bold small">Already have an account?
                                        </router-link>
                                    </div>
                                    <div class="text-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "register",
    created() {
        if (User.loggedIn()) {
            this.$router.push({name: 'home'})
        }
    },

    data() {
        return {
            form: {
                name: null,
                email: null,
                password: null,
                password_confirmation: null
            },
            errors: {}
        }
    },
    methods: {
        signup() {
            axios.post('/api/auth/signup', this.form)
                .then(res => {
                    User.responseAfterLogin(res)
                    Toast.fire({
                        icon: 'success',
                        title: 'Signed in successfully'
                    })
                    this.$router.push({name: 'home'})
                })

                .catch(error => this.errors = error.response.data.errors)

        }
    }
}
</script>

<style scoped>

</style>
