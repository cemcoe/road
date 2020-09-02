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
      name: "",
      password: "",
    };
  },
  methods: {
    subClick() {
      login(this.name, this.password).then((res) => {
        console.log(res);
        // 将token保存到本地
        window.sessionStorage.setItem("token", res);
      });
    },
  },
};
</script>

<style>
</style>