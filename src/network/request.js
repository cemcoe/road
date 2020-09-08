import axios from 'axios'
axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}` || ''

// 多环境配置
let apiUrl
if (process.env.NODE_ENV == 'production') {
  //线上
  apiUrl = 'http://demo.cemcoe.com/jianshu_api'
} else if (process.env.NODE_ENV == 'development') {
  //本地
  apiUrl = 'http://localhost:3000'
} else {
  //预发布
  apiUrl = 'http://localhost:3000'
}

export function request(config) {
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: apiUrl,
    timeout: 10000, // 设置超时时间10s
  })
  // 2. 请求拦截器，添加jwt token

  instance.interceptors.request.use(config => {
    // config.headers.Authorization = `Bearer ${sessionStorage.getItem('token')}` || ''
    return config
  }, err => {

  })
  // 3. 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {

  })

  // 4. 发送真正的网络请求
  return instance(config)
}