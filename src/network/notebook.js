import { request } from './request'

// 创建新连载
export function createNoteBook(notebook) {
  return request({
    // 传一个对象过来，以后如果添加字段时就简单了
    method: "post",
    url: '/nbs',
    data: notebook,
  })
}
