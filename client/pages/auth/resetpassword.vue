<template>
  <div>
    <div class="card-header">
      <p>PasswordReset</p>
    </div>
    <div class="card-body">
      <form @submit.prevent="ResetPassword">
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
          <label>Password Confirmation</label>
          <input
            v-model="form.password_confirmation"
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
            value="PasswordReset"
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
        email: '', // リセット対象のメールアドレス
        password: '', // 新しいパスワード
        password_confirmation: '', // 新しいパスワード確認
        token: '' // パスワードリセット実行するための一時的なトークン
      },
      requestUrl: ''
    }
  },

  created() {
    this.setQuery()
  },

  methods: {
    async ResetPassword() {
      // パスワードリセットリクエストを投げる関数
      await this.$axios
        .$post(this.requestUrl, this.form)
        .then(this.$router.push('/auth/login'))
        .catch((err) => {
          alert(err)
        })
    },
    setQuery() {
      // getリクエストのパラメータを取得する関数
      this.requestUrl = this.$route.query.queryURL || '' // パスワードリセットAPIのURL
      this.form.token = this.$route.query.token || '' // パスワードリセットするために必要なToken
    }
  }
}
</script>

<style scoped>

</style>
