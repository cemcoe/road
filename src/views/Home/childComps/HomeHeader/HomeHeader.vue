<template>
<div class="container">
  <div class="home-header">
    <div class="left logo">
      <a href="/">
        <img src="./imgs/nav-logo.png" alt="logo" />
      </a>
      <span>占位</span>
      <span>占位</span>
      <span>占位</span>
    </div>
    <div class="center">
      <input class="search" type="text" placeholder="搜索" />
      <span>提交</span>
    </div>
    <div class="right">
      <span class="style-mode">aa</span>
      <span class="beta">beta</span>
      <span class="user" @click="goto_profile">{{user.name}}</span>
      <span class="write">写文章</span>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {},
  },
  methods: {
    goto_profile() {
      this.$router.push("/u/" + this.user._id);
    },
  },
};
</script>

<style scoped>
.container {
  position: fixed;
  width: 100%;
  height: 70px;
  overflow: hidden;
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
  flex: 0 0 220px;
  display: flex;
  align-items: center;
}
.home-header .center {
  flex: 1;
}
.home-header .right {
  flex: 0 0 300px;
  display: flex;
}

.home-header .right .style-mode {
  margin: 0 12px;
}

.home-header .right .user {
  margin: 0 12px;
}
.home-header .right .write {
  flex: 0 0 100px;
  margin-left: 20px;
}
</style>