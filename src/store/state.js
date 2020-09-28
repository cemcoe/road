
// 图片地址多环境配置
let imgBaseUrl
if (process.env.NODE_ENV == 'production') {
  //线上
  imgBaseUrl = 'https://jian.cemcoe.com/jianshu_api'
} else if (process.env.NODE_ENV == 'development') {
  //本地
  imgBaseUrl = 'https://jian.cemcoe.com/jianshu_api'
} else {
  //预发布
  imgBaseUrl = 'http://localhost:3000'
}


export default {
  // 会用到的变量 || 状态
  user: JSON.parse(localStorage.getItem('user')) || {},
  token: localStorage.getItem('token') || '',
  followingUsers: JSON.parse(localStorage.getItem('followingUsers')) || [], // 用户关注列表
  imgBaseUrl: imgBaseUrl, // 图片地址
  post: {}, // 当前文章
  author: {}, // 文章作者信息
  authorFollowers: [], // 作者的粉丝
}