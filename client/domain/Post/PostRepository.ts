import _ from 'lodash'
import { AxiosInstance } from 'axios'
import Post from '~/domain/Post/Post'

export default class PostRepository {
  private axios: AxiosInstance

  constructor(axios: AxiosInstance) {
    this.axios = axios
  }

  public async listPosts(): Promise<Post[]> {
    const response = await this.axios.get('/post/')
    return _.map(response.data, postData => new Post(postData))
  }

  public async createPost(title: string): Promise<Post> {
    const response = await this.axios.post('/post/create', {
      title: title
    })
    return new Post(response.data)
  }

  public async deletePost(post: Post) {
    await this.axios.delete(`/post/delete/${post.id}`)
  }
}
