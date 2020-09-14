import { request } from './request'

// 创建文章
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

// 获取文章列表
// http://localhost:3000/posts?per_page=10&page=1
export function getHomePostList(per_page = 10, page = 1) {
  return request({
    method: "get",
    url: '/posts',
    params: {
      per_page,
      page
    }
  })
}

// 获取文章详情
export function getPostDetail(id) {
  return request({
    method: "get",
    url: `/posts/${id}`,
  })
}