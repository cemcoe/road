<template>
  <div>
    {{user._id}}
    {{user.name}}
    {{user.gender}}
  </div>
</template>

<script>
import { getUserInfo } from "network/profile.js";
export default {
  name: "Profile",
  data() {
    return {
      _id: null,
      // 用户信息
      user: {},
    };
  },
  // 有id向服务器发请求
  // 拿到路由传来的参数
  created() {
    this._id = this.$route.params.id;
    getUserInfo(this._id).then((res) => {
      console.log(res);
      this.user = {
        _id: res._id,
        name: res.name,
        gender: res.gender,
      };
    });
  },
};
</script>

<style>
</style>