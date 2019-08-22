<template>
  <div>
    <div class="card-header">
      <p>Verify Your Email Address</p>
    </div>
    <div class="card-body">
      <b-alert v-model="showSuccessAlert" variant="success">
        I have sent a password reissue email
      </b-alert>
      <label>Email verification has not been completed yet. Please press the
        button below to complete e-mail authentication</label>
      <div>
        <b-button block variant="primary" @click="ReSendVerifyEmail">
          Verify Email
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth', // ログインしてなければリダイレクトする
  layout: 'partials/TopNav',
  data() {
    return {
      form: {
        email: ''
      },
      showSuccessAlert: false
    }
  },

  methods: {
    async ReSendVerifyEmail() {
      // 現在ログインしているユーザのメールを取得する
      this.form.email = this.$auth.user.email

      await this.$axios
        .post('/auth/email/resend', this.form)
        .then((this.showSuccessAlert = true))
        .catch((err) => {
          alert(err)
        })
    }
  }
}
</script>

<style scoped>

</style>
