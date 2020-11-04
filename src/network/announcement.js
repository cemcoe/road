import { request } from './request'

// 获取最新的公告，这里先成一个特定的数据

export function getAnnouncementDetail(id = '5fa299126d61421a28902a2f') {

  return request({
    method: "get",
    url: `/announcements/${id}`,
  })
}
