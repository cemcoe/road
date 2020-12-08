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

// 获取指定聊天室中的信息
export function getRoomMessage(rid) {
  return request({
    method: "get",
    url: `/rooms/${rid}/messages`,
  })
}

// 创建聊天室消息
export function createRoomMessage(roomId, content) {
  return request({
    method: "post",
    url: `/rooms/${roomId}/messages`,
    data: {
      content
    }
  })
}
