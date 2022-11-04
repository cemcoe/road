import { request } from "../request/request";

/**
 * User login
 * @param {string} name
 * @param {string} password
 */
export function login({ name, password }) {
  return request({
    method: "post",
    url: "/login",
    data: {
      name,
      password,
    },
  });
}

// 获取特定用户的信息
export function getUserInfo(id) {
  return request({
    method: "get",
    url: `/users/${id}`,
  });
}

// 获取某人文章列表，默认为公开文章
export function getUserPosts(id, status = "public") {
  return request({
    method: "get",
    url: `/users/${id}/posts`,
    params: {
      status,
    },
  });
}

// 获取某人连载列表
export function getAuthorNoteBooks(id) {
  return request({
    method: "get",
    url: `/users/${id}/nbs`,
  });
}

// 关注某人
export function followingUser(id) {
  return request({
    method: "put",
    url: `/users/following/${id}`,
    params: {
      id,
    },
  });
}

// 取关某人
export function unfollowingUser(id) {
  return request({
    method: "delete",
    url: `/users/following/${id}`,
    params: {
      id,
    },
  });
}

// 获取关注列表
export function listfollowingUser(id, type = "users") {
  return request({
    method: "get",
    url: `/users/${id}/following`,
    params: {
      type,
    },
  });
}

// 获取粉丝列表
export function listfollower(id) {
  return request({
    method: "get",
    url: `/users/${id}/followers`,
    params: {
      id,
    },
  });
}
