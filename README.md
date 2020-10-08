# jianshu_client
仿简书web页面

预览地址：https://jian.cemcoe.com
开发日志: https://www.jianshu.com/nb/47900649

一个仿简书的项目，使用真实的后端数据。后端Koa + MongoDB，前端使用 Vue 全家桶。登录注册采用 JWT 方案，功能方面目前在用户模块中实现了注册登录功能，在文章管理模块中实现了创建文章和修改文章功能，在粉丝模块实现了对作者的关注和取消关注功能，在评论模块实现了一级评论的创建和展示。文章数据格式存储方面数据库中存放原始 markdown 文件，由前端渲染成页面。

## 技术栈
vue2 + vuex + vue-router + webpack + ES6/7 + axios + flex


## 项目运行

需要先启动服务端

服务端项目地址：https://github.com/cemcoe/jianshu_server

```
git clone git@github.com:cemcoe/jianshu_client.git

cd jianshu_client

npm install

npm run dev
```

## 目标功能
- [ ] 小岛
- [ ] 消息
- [ ] 专题
- [ ] 活动
- [ ] 连载
- [ ] 用户信息修改
- [x] 首页推荐子页
- [x] 首页文章列表下拉加载更多
- [x] 用户关注和取消关注
- [x] 用户对文章的一级评论
- [x] 文章详情页
- [x] 个人页面
- [x] 写文章页面
- [x] 编辑文章页面
- [x] 搜索页面


## 文章数据

大部分文章数据由 [狗屁不通文章生成器](https://suulnnka.github.io/BullshitGenerator/index.html) 生成，没有任何的价值，仅供展示占位使用。


文章渲染借助 [mavonEditor](https://github.com/hinesboy/mavonEditor) 采用前端渲染的方式。


前端页面用户采用 markdown 编写文章，数据库中存放原始 markdown 文件。

在文章详情页，前端拿到 markdown 文件渲染展示。



## 通用组件
- [ ] upload
- [ ] swiper
- [ ] button
- [ ] input
- [x] tabbar
- [x] toast
- [x] loading
- [x] navbar
- [x] tabcontrol


对于底部导航栏 tabbar
主文件在 @/components/content/mainTabbar/MainTabBar.vue
UI组件在 @/components/common/tabbar/ 
使用时需要提供要跳转的路径，活跃时和非活跃时的图标以及提示文字。





## 准备流程


1.划分项目目录结构
- assets 静态资源 css imgs
- views 路由组件
- components 公共组件
  - common 公共组件
  - content 和业务相关的组件
- utils 功能函数
- store vuex代码
- network 网络请求相关


2.初始化样式
normalize.css

https://github.com/necolas/normalize.css


3.修改配置
vue.config.js 配置别名 resolve alias

