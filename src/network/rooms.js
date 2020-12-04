import { request } from './request'

// 创建聊天室
export function createRoom(members) {
  return request({
    method: "post",
    url: '/rooms',
    data: { members },
  })
}

// 获取聊天室列表
export function getRooms() {
  return request({
    method: "get",
    url: '/rooms',
  })
}
