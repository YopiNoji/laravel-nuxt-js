<template>
  <div>
    <div class="card-header">
      <p>Register</p>
    </div>
    <div class="card-body">
      <form @submit.prevent="register">
        <!-- 標準のsubmitは実行しない -->
        <div class="form-group">
          <label>Name</label>
          <input
            v-model="form.name"
            type="test"
            class="form-control"
            :class="{ 'is-invalid': errors.name }"
            placeholder="Name"
          >
          <div v-if="errors.name" class="invalid-feedback">
            {{ errors.name[0] }}
          </div>
        </div>
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
          <input
            type="submit"
            value="Register"
            class="btn btn-default w-100"
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'guest', // ログイン状態であればリダイレクトする
  layout: 'partials/TopNav',
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async register() {
      await this.$axios
        .$post('/auth/register', this.form)
        .then(
          this.$auth.login({ data: this.form }),
          this.$router.push({ name: 'auth/login' })
        )
        .catch((err) => {
          alert(err)
        })
    }
  }
}
</script>

<style scoped>

</style>
