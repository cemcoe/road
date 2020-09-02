import axios from 'axios'

export function request(config) {
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000, // 设置超时时间10s
  })
  // 2. 请求拦截器，添加jwt token
  instance.interceptors.request.use(config => {
    config.headers['token'] = sessionStorage.getItem('token') || ''
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