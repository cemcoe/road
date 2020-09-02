import { request } from './request'

export function getUserInfo(id) {
  return request({
    method: "get",
    url: `/users/${id}`,
  })
}