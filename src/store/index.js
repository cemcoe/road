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


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 会用到的变量 || 状态
    count: 0,
    userInfo: {},
  },
  mutations: {
    // 发生突变，需要传入state参数对state做出操作
    // 每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
    // 要唤醒一个 mutation handler，你需要以相应的 type 调用 store.commit 方法
    // 参数 state 和 playload(剩余参数，格式对象)
    increment(state, payload) {
      state.count += payload.amount
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
    increment({commit}) {
      commit('increment')
    }
    // 触发action
    // store.dispatch('increment)
  },
  modules: {
  }
})
