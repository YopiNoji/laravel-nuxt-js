<template>
  <div>
    <div class="card-header">
      <p>During Verification Your Email Address</p>
    </div>
    <div class="card-body">
      <label>Validating your email address.</label>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth', // 未ログイン状態であればリダイレクトする
  layout: 'partials/TopNav',
  data() {
    return {
      queryURL: ''
    }
  },

  async mounted() {
    const queryURL = this.$route.query.queryURL || ''
    if (queryURL !== '') {
      await this.$axios
        .$get(queryURL)
        .then(
          this.$auth.fetchUser(), // メール認証が完了したため、ユーザ情報を再取得する
          this.$router.push({ name: 'index' })
        )
        .catch((err) => {
          alert('メール認証が失敗しました。再度メール認証を行ってください。')
          alert(err)
          this.$router.push('/auth/resendverify')
        })
    }
  }
}
</script>

<style scoped>

</style>
