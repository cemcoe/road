<template>
  <div class="container">
    <nav-bar>
      <div slot="left">
        <a href="https://github.com/cemcoe/jianshu_client">cemcoe</a>
      </div>
      <div slot="center">
        <router-link to="/search">
          <cem-input placeholder="搜索感兴趣的内容"></cem-input>
        </router-link>
      </div>
      <div slot="right">
        <div v-if="user.name">
          <router-link :to="user_detail_link" class="user-info">
            <img :src="user.avatar" alt="avator" />
          </router-link>
        </div>
        <div v-else>
          <router-link :to="'/login'" replace class="login"
            >登录|注册</router-link
          >
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CemInput from "components/common/Input/Input";
export default {
  name: "HomeHeader",
  components: {
    NavBar,
    CemInput,
  },
  created() {
    console.log(this.$store.state.user);
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
.login {
  font-size: 14px;
}
img {
  width: 26px;
  height: 26px;
  /* border-radius: 50%; */
  border-radius: 4px;
}
</style>