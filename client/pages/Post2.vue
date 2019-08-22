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
      <form label="本のタイトル">
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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Post from '~/domain/Post/Post'

@Component({
  middleware: 'auth',
  layout: 'partials/TopNav',
  async asyncData({ app }) {
    const posts = await app.$postRepository.listPosts()

    return {
      posts
    }
  }
})
export default class extends Vue {
  private posts

  private title = ''

  private error = ''

  async createPost() {
    try {
      await this.$postRepository.createPost(this.title)

      this.posts = await this.$postRepository.listPosts()
      this.title = ''
    } catch (e) {
      this.error = e
    }
  }

  async deletePost(post: Post) {
    try {
      await this.$postRepository.deletePost(post)

      this.posts = await this.$postRepository.listPosts()
    } catch (e) {
      this.error = e
    }
  }
}
</script>
