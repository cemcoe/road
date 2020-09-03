<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">login</router-link> |
      <div @click="goto_profile">{{name}}</div>
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
  data() {
    return {
      // 登录用户id
      _id: '',
      // 登录用户的名字
      name: '',
    }

  },
  components: {
    HelloWorld
  },
  methods: {
    goto_profile() {
      this.$router.push('/u/' + this._id)
    }
  },
  created() {
    getUserInfo().then(res => {
      console.log(res)
      this._id = res._id
      this.name = res.name
    })
  },
  computed: {
  }
}
</script>
