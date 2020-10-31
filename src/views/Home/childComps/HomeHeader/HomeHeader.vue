<template>
  <div class="container">
    <nav-bar>
      <div slot="left">
        <a href="https://github.com/cemcoe/jianshu_client">cemcoe</a>
      </div>
      <div slot="center" class="search">
        <router-link to="/search">
          <button>搜索感兴趣的内容</button>
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

.search button {
  width: 90%;
  border: 0px;
  border-radius: 6px;
  padding: 6px;
  outline-style: none;
  text-align: center;
  background-color: rgb(243, 237, 237);
  font-size: 12px;
  letter-spacing: 2px;
}
</style>