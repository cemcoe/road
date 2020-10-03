# jianshu_client
仿简书web页面

预览地址：https://jian.cemcoe.com/home/recommend

## 技术栈
vue2 + vuex + vue-router + webpack + ES6/7 + axios + flex


## 项目运行
需要先启动服务端

```
git clone git@github.com:cemcoe/jianshu_client.git

cd jianshu_client

npm install

npm run dev
```

## 目标功能
- [x] 首页推荐子页
- [ ] 文章详情页
- [ ] 个人页面
- [ ] 写文章页面

## 文章存储格式
https://github.com/hinesboy/mavonEditor



前端页面用户采用 markdown 编写文章，数据库中存放原始 markdown 文件。

在文章详情页，前端拿到 markdown 文件渲染展示。
