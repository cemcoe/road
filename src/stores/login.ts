import { defineStore } from "pinia";
import { login } from "@/service/modules/user";

const useLoginStore = defineStore("login", {
  state: () => {
    return {
      loginInfo: {
        name: "cemcoe",
        password: "test",
      },
      token: localStorage.getItem("token") || "",
      userInfo: localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo") || "")
        : {},
    };
  },

  actions: {
    async loginAction() {
      console.log(this.loginInfo);
      const res = await login(this.loginInfo);
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userInfo", JSON.stringify(user));
      this.token = token;
      this.userInfo = user;
    },
    async logoutAction() {
      localStorage.clear();
    },
  },

  getters: {
    isLogin({ token }) {
      return !!token;
    },
  },
});

export default useLoginStore;
