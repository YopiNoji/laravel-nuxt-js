import _ from 'lodash'

export default class Post {
  constructor(protected properties: { [key: string]: any }) {}

  get id(): string {
    return _.get(this.properties, 'id')
  }

  get title(): string {
    return _.get(this.properties, 'title')
  }
}
