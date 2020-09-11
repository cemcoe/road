<template>
  <div>
    <div v-if="!user._id">查无此人</div>
    <div v-else>
      {{user._id}}
      {{user.name}}
      {{user.gender}}
    </div>
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
      // 错误处理
      if (res.status === 404) {
        console.log("查无此人");
      }
      if (res.status === 200) {
        console.log(res);
        this.user = res.data.user;
      }
    });
  },
};
</script>

<style>
</style>