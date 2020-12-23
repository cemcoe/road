<template>
  <div class="container">
    <div class="panel">
      <a
        href="javascript:;"
        v-show="type === 'login'"
        @click="type = 'register'"
        >登录|去注册</a
      >
      <a
        href="javascript:;"
        v-show="type === 'register'"
        @click="type = 'login'"
        >注册|去登录</a
      >
    </div>

    <div>
      <form>
        <div class="username">
          <label for="username">用户名</label>
          <input v-model="name" id="username" type="text" />
        </div>
        <div class="password">
          <label for="password">密码</label>
          <input id="password" v-model="password" type="password" />
        </div>
        <div class="sigin">
          <button
            class="sign-in-button"
            type="button"
            @click="btnClick"
            :disabled="!rightUserNameAndPass"
          >
            <span id="sign-in-loading"></span>
            {{ buttonText }}
          </button>
        </div>
      </form>
    </div>
    <div>
      <p>
        除cemcoe主账号外，其余测试账号密码统统为cemcoe，注册功能可用，但不能与现有账号重名。
      </p>
      <p></p>
      <p>账号：test:cemcoe</p>
      <p>账号：robot:cemcoe</p>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
import { login, register } from "network/user";

export default {
  data() {
    return {
      name: "",
      password: "",
      type: "login", // 默认展示登录对话框
      disable: true,
    };
  },
  methods: {
    loginClick() {
      // 按钮不可点击，并提示
      this.disable = false;

      login(this.name, this.password).then((res) => {
        console.log(res);

        if (res.status === 200) {
          this.$store.commit("set_token", res.data.token);
          // 将token信息保存到vuex和localStorage
          this.$store.commit("setUser", res.data.user);
          // 用户关注列表持久化存储
          this.$store.dispatch("listfollowingUser");
          if (this.$store.state.token) {
            this.$toast.show("登录成功", 2000);
            this.$router.push("/");
          }
        } else if (res.status === 401) {
          this.$toast.show("登录失败", 3000);
          this.disable = true;
        }
      });
    },

    registerClick() {
      // 按钮不可点击，并提示
      this.disable = false;

      register(this.name, this.password).then((res) => {
        if (res.status === 200) {
          this.$toast.show("注册成功，请登录", 2000);
          // nTODO 自动为用户登录
          this.type = "login";
          this.disable = true;
        } else if (res.status === 409) {
          this.$toast.show("注册失败，换一个名字", 2000);

          this.disable = true;
        }
      });
    },

    btnClick() {
      console.log("处理函数", this.type);
      if (this.type === "login") {
        this.loginClick();
      } else if (this.type === "register") {
        this.registerClick();
      }
    },
  },

  computed: {
    // 前端检查是否符合规范
    rightUserNameAndPass() {
      // 这里先检查是否为空
      return this.name && this.password && this.disable;
    },
    buttonText() {
      // 语义化
      if (this.disable && this.type === "login") {
        return "登录";
      } else if (this.disable && this.type === "register") {
        return "注册";
      } else {
        return "loading";
      }
    },
  },
};
</script>

<style scoped>
.container {
  min-width: 300px;
  /* background-color: #000; */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -90%);
  line-height: 28px;
}

label {
  display: inline-block;
  width: 60px;
}

input {
  border: 1px solid #000;
}
</style>