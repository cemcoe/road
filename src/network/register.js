import { request } from './request'

export function register(name, password) {
  return request({
    method: "post",
    url: '/users',
    data: {
      name,
      password
    },

  })
}