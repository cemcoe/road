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


import { followingUser, unfollowingUser, listfollowingUser } from "network/user";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 会用到的变量 || 状态
    user: JSON.parse(localStorage.getItem('user')) || {},
    token: localStorage.getItem('token') || '',
    followingUsers: [], // 用户关注列表
    imgBaseUrl: imgBaseUrl, // 图片地址
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


    // 用户关注用户
    async followingUser(context, id) {
      // 关注当前用户
      const res = await followingUser(id)
      if (res.status === 401) {
        this.$toast.show("关注失败，刷新页面", 2000);
        return;
      }
      // TODO 将关注的用户添加到state上
      this.$toast.show("关注成功，刷新页面", 2000);
    },

    // 用户取消关注
    async unfollowingUser(context, id) {
      const res = await unfollowingUser(id)
      if (res.status === 401) {
        this.$toast.show("取消关注失败，刷新页面", 2000);
        return;
      }
      // TODO 将取消关注的用户移除state
      this.$toast.show("取消关注成功，刷新页面", 2000);
    }
  },
modules: {
}
})
