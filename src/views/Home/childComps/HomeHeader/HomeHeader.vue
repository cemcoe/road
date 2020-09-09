<template>
  <div class="container">
    <div class="home-header">
      <div class="left logo">
        <a href="/">
          <img src="./imgs/nav-logo.png" alt="logo" />
        </a>
      </div>
      <div class="center">
        <input class="search" type="text" placeholder="搜索感兴趣的内容" />
        {{user}}
      </div>
      <div class="right">
        <span v-if="user.name" class="user" @click="goto_profile">{{user.name}}</span>
        <!-- <a v-else class="user" href="/login">登录</a> -->
        <router-link v-else class="user" :to="'/login'" replace>登录</router-link>
        
      </div>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    goto_profile() {
      this.$router.push("/u/" + this.$store.state.user._id);
    },
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 70px;
}
.home-header {
  display: flex;
  align-items: center;
  margin: 0 auto;
  /* background-color: #000; */
}
img {
  width: 100px;
  height: 56px;
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
  flex: 0 0 60px;
  display: flex;
  
}
.home-header .right .user {
  height: 60px;
  line-height: 60px;
  /* padding-right: 14px; */
  border-radius: 50%;
  margin-right: 14px;
  background-color: rgb(243, 239, 241);
  box-shadow: 0 0 4px rgb(247, 244, 244);

}
</style>