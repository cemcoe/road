import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { Button } from 'vant';
// main.js
import toast from 'components/common/toast'
// 安装toast插件
Vue.use(toast)

Vue.use(Button);

Vue.config.productionTip = false

// https://forum.vuejs.org/t/vue-router-vuex/43055

router.beforeEach((to, from, next) => {
  // if (to.name !== 'Login') {
  //   console.log(store.state.auth)
  // }
  // next()
  if (to.meta.requireAuth) {
    console.log('此页面需要登录才能访问')
    // 登录成功，放行
    if (store.state.user.name) {
      // vuex 中有用户信息
      next()	//放行
    } else {
      // 跳转到登录界面
      next({ path: "/login" })
    }
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
