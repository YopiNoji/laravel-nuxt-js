<template>
  <div>
    <div class="card-header">
      <p>ForgotPassword</p>
    </div>
    <div class="card-body">
      <p v-if="showSuccessAlert" variant="success">
        I have sent a password reissue email
      </p>
      <!-- パスワードリセットメールを送れたことをメッセージで表示する -->
      <form @submit.prevent="ReSendVerifyEmail">
        <div class="form-group">
          <label>Email</label>
          <input
            v-model="form.email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors.email }"
            placeholder="Email"
          >
        </div>
        <div class="form-group">
          <input
            type="submit"
            value="SendResetLinkEmail"
            class="btn btn-default w-100"
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'guest', // ログインであればリダイレクトする
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
      // パスワードリセットのメール送信APIを実行する
      await this.$axios
        .post('/auth/password/email', this.form)
        .then(
          // 送信完了メッセージ表示
          (this.showSuccessAlert = true)
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
