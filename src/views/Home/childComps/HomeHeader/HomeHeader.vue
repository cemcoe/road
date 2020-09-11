<template>
  <div class="container">
    <div class="home-header">
      <div class="left logo">
        <router-link to="/">
          <img src="./imgs/nav-logo.png" alt="logo" />
        </router-link>
      </div>
      <div class="center">
        <input class="search" type="text" placeholder="搜索感兴趣的内容" />
      </div>
      <div class="right user">
        <!-- <div v-if="user.name" @click="goto_profile" class="user-info">{{user.name}}</div> -->
        <!-- 用户登录后用户详情页的链接是不变的，使用计算属性更好 -->
        <router-link v-if="user.name" :to="user_detail_link" class="user-info">{{user.name}}</router-link>
        <router-link v-else :to="'/login'" replace class="login">登录|注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  methods: {
    // goto_profile() {
    //   this.$router.push("/u/" + this.$store.state.user._id);
    // },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    user_detail_link() {
      return "/u/" + this.$store.state.user._id;
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 50px;
}

.home-header {
  display: flex;
  align-items: center;
  margin: 0 auto;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
}

img {
  height: 50px;
}

.home-header .left {
  flex: 0 0 100px;
  display: flex;
  align-items: center;
}

.home-header .center {
  flex: 1;
}

.home-header .right {
  flex: 0 0 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
}

.home-header .right .user-info {
  background-color: rgb(232, 232, 243);
  height: 50px;
  width: 50px;
  line-height: 50px;
  text-align: center;
  color: #f40;
}

</style>