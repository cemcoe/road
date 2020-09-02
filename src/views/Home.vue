<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">login</router-link> |

      <router-link to="/u/5f4dedeca7fd30060cacab23">profile</router-link>
      <!-- 问题来了，这里的id应该是登录用户的id，如何得到当前用户的id -->
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getUserInfo } from "network/home";

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created() {
    getUserInfo().then(res => {
      console.log(res)
    })
  }
}
</script>
