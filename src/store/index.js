import Vue from 'vue'
import Vuex from 'vuex'
// 最好提前在你的 store 中初始化好所有所需属性。
// 当需要在对象上添加新属性时，你应该以新对象替换老对象。例如，利用对象展开运算符我们可以这样写
// state.obj = { ...state.obj, newProp: 123 }
// mutation 必须是同步函数
// 为此出现actions，它可以处理异步操作
// 在actions 中处理异步操作

// actions 和mutation的区别是个啥？
// 有了mutation还要actions干什么
// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作。

// 图片地址多环境配置
let imgBaseUrl
if (process.env.NODE_ENV == 'production') {
  //线上
  imgBaseUrl = 'https://jian.cemcoe.com/jianshu_api'
} else if (process.env.NODE_ENV == 'development') {
  //本地
  imgBaseUrl = 'http://localhost:3000'
} else {
  //预发布
  imgBaseUrl = 'http://localhost:3000'
}


import { getUserInfo, followingUser, unfollowingUser, listfollowingUser, listfollower } from "network/user";
import { getPostDetail } from 'network/post'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 会用到的变量 || 状态
    user: JSON.parse(localStorage.getItem('user')) || {},
    token: localStorage.getItem('token') || '',
    followingUsers: [], // 用户关注列表
    imgBaseUrl: imgBaseUrl, // 图片地址

    post: {}, // 当前文章
    author: {}, // 文章作者信息
    authorFollowers: [], // 作者的粉丝
  },
  mutations: {
    // 发生突变，需要传入state参数对state做出操作
    // 每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
    // 要唤醒一个 mutation handler，你需要以相应的 type 调用 store.commit 方法
    // 参数 state 和 playload(剩余参数，格式对象)
    // receive_user_info(state, payload) {
    //   state.userInfo = payload
    // },
    set_token(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    del_token(state) {
      state.token = "";
      localStorage.removeItem("token");
    },

    setUser(state, user) {
      // 拿到完整的图片地址
      user.avatar = state.imgBaseUrl + user.avatar

      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
      // localStorage 注意格式转换
    },
    del_user(state) {
      state.user = {};
      localStorage.removeItem("user");
    },

    // 设置用户关注列表
    receive_following_user(state, followingUsers) {
      state.followingUsers = followingUsers
    },

    // 设置文章信息
    set_post(state, post) {
      state.post = post;
    },

    // 设置作者信息
    set_author(state, author) {
      // 拿到完整的图片地址
      author.avatar = state.imgBaseUrl + author.avatar
      state.author = author;
    },

    // authorFollowers
    receive_author_following_user(state, followers) {
      state.authorFollowers = followers

    }
  },

  getters: {
    // 从 store 中的 state 中派生出一些状态


  },
  actions: {
    // 与 store 实例具有相同方法和属性的 context 对象
    // 通过 context.state 和 context.getters 来获取 state 和 getters

    // increment(context) {
    //   context.commit('increment')
    // }

    // 参数解构
    // 触发action
    // store.dispatch('increment)
    // 异步获取用户信息
    // async getUserInfo(context) {
    //   const result = await getUserInfo()
    //   context.commit('receive_user_info', result)
    // },

    async listfollowingUser(context) {
      // 向服务器要关注的用户列表
      const result = await listfollowingUser(context.state.user._id);
      const followingUsers = result.data.following
      // 触发mutations更改state
      context.commit('receive_following_user', followingUsers)
    },


    //////////// 粉丝经济

    // 用户关注用户
    // 关注成功更新粉丝列表
    async followingUser(context, id) {
      // 关注当前用户
      const res = await followingUser(id)
      if (res.status === 401) {
        console.log("关注失败，刷新页面");
        return;
      }
      // TODO 将关注的用户添加到state上
      console.log("关注成功，刷新页面");
      // 更新作者粉丝列表
      // 向服务器要关注的用户列表
      const result = await listfollower(id);
      const followers = result.data.followers
      // 触发mutations更改state
      // console.log(result, '33333333333333333333333')
      context.commit('receive_author_following_user', followers)
      /////////////////////////////////
      ///////////////////////let user = [1,11,1,1,]
      /////////////////////////////////////////////////
      // context.commit('receive_author_following_user', id)

    },

    // 用户取消关注
    // 取消关注成功更新粉丝列表
    async unfollowingUser(context, id) {
      const res = await unfollowingUser(id)
      if (res.status === 401) {
        console.log("取消关注失败，刷新页面");
        return;
      }
      // TODO 将取消关注的用户移除state
      console.log("取消关注成功，刷新页面");
       // 更新作者粉丝列表
      // 向服务器要关注的用户列表
      const result = await listfollower(id);
      const followers = result.data.followers
      // 触发mutations更改state
      // console.log(result, '33333333333333333333333')
      context.commit('receive_author_following_user', followers)
    },


    // 获取文章信息
    async getPostDetail(context, id) {
      const res = await getPostDetail(id)
      const post = res.data.post
      const author = post.author
      console.log(res, 'vuexxxxxxxxxxxxxxxxxxxxxxxxx')
      // 更新文章信息
      context.commit('set_post', post)
      // 更新作者信息
      context.commit('set_author', author)
    },
    // (this.$route.params.id).then((res) => {
    //   this.post = res;
    //   this.author = res.author;
    //   console.log(this.post);
    // });

    // 获取作者信息，通过url获取id
    async getAuthorInfo(context, id) {
      const res = await getUserInfo(id)
      console.log(res, 'vuexxxxxxxxxxxxxxxxxxxxx')
      this.commit('set_author', res.data.user)
    },

    // 获取作者粉丝列表
    async listAuthorFollowingUser(context, id) {
      // 向服务器要关注的用户列表
      const result = await listfollower(id);
      const followers = result.data.followers
      // 触发mutations更改state
      console.log(result, '33333333333333333333333')
      context.commit('receive_author_following_user', followers)
    },
    

  },
  modules: {
  }
})
