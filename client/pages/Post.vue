<template>
  <section>
    <table class="table">
      <tr>
        <th>タイトル</th>
      </tr>
      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.title }}</td>
        <td>
          <button
            type="button"
            class="button is-primary"
            @click.prevent="deletePost(post)"
          >
            削除する
          </button>
        </td>
      </tr>
    </table>

    <section class="modal-card-body">
      <form label="タイトル">
        <input v-model="title" type="input" placeholder="タイトル">
      </form>
      <button
        type="button"
        class="button is-primary"
        @click.prevent="createPost()"
      >
        登録する
      </button>
    </section>

    <p v-if="error">
      {{ error }}
    </p>
  </section>
</template>

<script>
export default {
  layout: 'partials/TopNav',
  middleware: 'auth',
  async asyncData({ app }) {
    const posts = await app.$postRepository.listPosts()

    return {
      posts
    }
  },
  methods: {
    async createPost() {
      try {
        await this.$postRepository.createPost(this.title)

        this.posts = await this.$postRepository.listPosts()
        this.title = ''
      } catch (e) {
        this.error = e
      }
    },

    async deletePost(post) {
      try {
        await this.$postRepository.deletePost(post)

        this.posts = await this.$postRepository.listPosts()
      } catch (e) {
        this.error = e
      }
    }
  }
}
</script>
