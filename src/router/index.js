import Vue from 'vue'
import VueRouter from 'vue-router'

import main from './main'
import home from './home'
import author from './author'
import my from './my'

// 路由文件说明
// main 大路由文件
// home home相关的路由
// author author相关的路由


// meta变量说明
// requireAuth: true 是否登录才能访问
// showFooter: true 是否要展示底部导航


Vue.use(VueRouter)


const routes = [
  ...main,
  home,
  author,
  ...my,
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
