import { request } from './request'

// 请求文章评论
export function getPostComments(postId) {
  return request({
    method: "get",
    url: `/posts/${postId}/comments`
  })

}