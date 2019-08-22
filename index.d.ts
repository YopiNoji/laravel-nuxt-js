import PostRepository from '~/domain/Post/PostRepository'

declare module 'vue/types/vue' {
  interface Vue {
    $postRepository: PostRepository
  }
}
