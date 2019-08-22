import PostRepository from '~/domain/Post/PostRepository'

export default (context, inject) => {
  const postRepository = new PostRepository(context.$axios)

  inject('postRepository', postRepository)
}
