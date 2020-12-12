# 书核
仿简书web页面

预览地址：https://jian.cemcoe.com

开发日志：https://www.jianshu.com/nb/47900649

一个仿简书的项目，使用真实的后端数据。后端Koa + MongoDB，前端使用 Vue 全家桶。


## 技术栈
vue2 + vuex + vue-router + webpack + ES6/7 + axios + flex


## 一些方案
- 登录注册采用 JWT 方案
- 及时性方面采用 ajax 短轮询，计划换成 websocket
- 文章渲染借助 [mavonEditor](https://github.com/hinesboy/mavonEditor) 采用前端渲染的方式，计划更换
- 文章数据由 [狗屁不通文章生成器](https://suulnnka.github.io/BullshitGenerator/index.html) 生成，没有任何的价值，仅供展示占位使用


## 项目运行
需要先启动服务端，服务端项目地址：https://github.com/cemcoe/jianshu_server

```
git clone git@github.com:cemcoe/jianshu_client.git

cd jianshu_client

npm install

npm run dev
```

## 目标功能
- [ ] 小岛
- [ ] 专题
- [ ] 用户信息修改
- [ ] 消息
- [x] 连载
- [x] 简信
- [x] 活动
- [x] 首页推荐子页
- [x] 首页文章列表下拉加载更多
- [x] 用户关注和取消关注
- [x] 用户对文章的一级评论
- [x] 文章详情页
- [x] 个人页面
- [x] 写文章页面
- [x] 编辑文章页面
- [x] 搜索页面


## 项目目录结构
- assets 静态资源 css imgs
- views 路由组件
- components 公共组件
  - common 公共组件
  - content 和业务相关的组件
- utils 功能函数
- store vuex代码
- network 网络请求相关