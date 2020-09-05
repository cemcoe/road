import { request } from './request'

// 获取登录用户信息
export function getUserInfo() {
  return request({
    method: "get",
    url: '/userinfo',
  })
}


// 获取文章列表
// http://localhost:3000/posts?per_page=10&page=1
export function getHomePostList(per_page = 1, page = 1) {
  return request({
    method: "get",
    url: '/posts',
    params: {
      per_page,
      page
    }
    
  })
}