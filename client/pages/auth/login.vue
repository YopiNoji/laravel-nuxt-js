<template>
  <div>
    <div class="card-header">
      <p>Login</p>
    </div>
    <div class="card-body">
      <form @submit.prevent="Login">
        <!-- 標準のsubmitは実行しない -->
        <div class="form-group">
          <label>Email</label>
          <input
            v-model="form.email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors.email }"
            placeholder="Email"
          >
          <div v-if="errors.email" class="invalid-feedback">
            {{ errors.email[0] }}
          </div>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            v-model="form.password"
            type="password"
            class="form-control"
            :class="{
              'is-invalid': errors.password
            }"
            placeholder="Password"
          >
          <div v-if="errors.password" class="invalid-feedback">
            {{ errors.password[0] }}
          </div>
        </div>
        <div class="form-group">
          <input id="checkbox" v-model="form.remember" type="checkbox">
          <label for="checkbox">remember me</label>
        </div>
        <div class="form-group">
          <input
            type="submit"
            value="Login"
            class="btn btn-default w-100"
          >
          <nuxt-link class="nav-link" to="/auth/forgotpassword">
            Forgot Your Password
          </nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'guest',
  layout: 'partials/TopNav',
  data() {
    return {
      form: {
        email: '',
        password: '',
        remember: false
      }
    }
  },
  methods: {
    async Login() {
      await this.$auth
        .login({ data: this.form })
        .then(this.$router.push('login'))
        .catch((err) => {
          alert(err)
        })
    }
  }
}
</script>

<style scoped>

</style>
