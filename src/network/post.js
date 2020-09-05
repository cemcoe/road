import { request } from './request'

export function getPostDetail(id) {
  return request({
    method: "get",
    url: `/posts/${id}`,
  })
}