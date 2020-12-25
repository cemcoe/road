import { request } from './request'

export function getIslandPostList() {
  return request({
    method: "get",
    url: '/islands/islandPosts',
  })
}
