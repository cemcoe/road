import { request } from './request'

export function getUserPosts(id) {
  return request({
    method: "get",
    url: `/users/${id}/posts`,
  })
}

// 关注某人
// router.put('/users/following/:id',auth, follow)
export function followingUser(id) {
  return request({
    method: "put",
    url: `/users/following/${id}`,
    params: {
      id
    }
  })
}

// 取关某人
// router.get('/users/:id/following', listFollowing)
// router.put('/users/following/:id',auth, follow)
// router.delete('/users/following/:id', auth, unfollow)
// router.get('/users/:id/followers', listFollowers)
export function unfollowingUser(id) {
  return request({
    method: "delete",
    url: `/users/following/${id}`,
    params: {
      id
    }
  })
}

// 获取关注列表
// router.get('/users/:id/following', listFollowing)
export function listfollowingUser(id) {
  return request({
    method: "get",
    url: `/users/${id}/following`,
    params: {
      id
    }
  })
}


// 获取粉丝列表
// router.get('/users/:id/followers', listFollowers)
export function listfollower(id) {
  return request({
    method: "get",
    url: `/users/${id}/followers`,
    params: {
      id
    }
  })
}
