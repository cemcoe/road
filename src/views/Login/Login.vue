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

export default {
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    subClick() {
      // 发送请求

      axios
        .post("http://localhost:3000/login", {
          name: this.name,
          password: this.password,
        })
        .then(function (response) {
          console.log(response.data);
          if (response.status === 200) {
            // 将token保存到本地
            window.sessionStorage.setItem("jwt", response.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>