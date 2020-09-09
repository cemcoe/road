<template>
  <div>
    <form method="post">
      <div>
        <input placeholder="用户名" type="text" v-model="name" />
      </div>
      <div>
        <input placeholder="密码" type="password" v-model="password" />
      </div>
      <button class="sign-in-button" type="button" @click="subClick">
        <span id="sign-in-loading"></span>
        登录
      </button>
    </form>
  </div>
</template>

<script>
const axios = require("axios");
import { login } from "network/login";

export default {
  data() {
    return {
      name: "hello",
      password: "cemcoe",
    };
  },
  methods: {
    subClick() {
      login(this.name, this.password).then((res) => {
        // console.log(res);
        // // 将token保存到本地
        // window.sessionStorage.setItem("token", res.token);
        // // 登录成功跳转到首页
        // this.$router.push("/");

        console.log(res)

        this.$store.commit("set_token", res.data.token);
        // 将token信息保存到vuex和localStorage
        this.$store.commit("setUser", res.data.user);
        if (this.$store.state.token) {
          this.$router.push("/");
        }
      });
    },
  },
};
</script>

<style>
</style>