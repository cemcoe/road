<template>
  <div class="container">
    <nav-bar>
      <div slot="center">
        <input class="search" type="text" placeholder="搜索感兴趣的内容" />
      </div>
      <div slot="right">
        <div v-if="user.name">
          <router-link :to="user_detail_link" class="user-info">{{user.name}}</router-link>
        </div>
        <div v-else>
          <router-link :to="'/login'" replace class="login">登录|注册</router-link>
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "HomeHeader",
  methods: {
    // goto_profile() {
    //   this.$router.push("/u/" + this.$store.state.user._id);
    // },
  },
  components: {
    NavBar,
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


input {
  border: 0px;
  border-radius: 20px;
  padding: 6px;
  outline-style: none;
  text-align: center;
  border: 1px solid #ccc;
}

input:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}

.user-info {
  background-color: rgb(232, 232, 243);
  display: inline-block;
  height: 40px;
  width: 40px;
  line-height: 40px;
  text-align: center;
  color: #f40;
  border-radius: 50%;
} 
.login {
  font-size: 14px;
}
</style>