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
export function getHomePostList(page = 1, per_page = 10) {
  return request({
    method: "get",
    url: '/posts',
    params: {
      page,
      per_page,
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