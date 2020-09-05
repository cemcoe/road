import { request } from './request'

export function createPost(title, content) {
  return request({
    method: "post",
    url: '/posts',
    data: {
      title,
      content
    },

  })
}