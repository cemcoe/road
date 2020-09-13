import { request } from './request'

export function getUserPosts(id) {
  return request({
    method: "get",
    url: `/users/${id}/posts`,
  })
}