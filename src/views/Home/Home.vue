<template>
  <div class="home">
    <div id="nav">
      <home-header :user="user"></home-header>
      <!-- <router-link to="/">Home</router-link>|
      <router-link to="/login">login</router-link> -->
      <!-- 问题来了，这里的id应该是登录用户的id，如何得到当前用户的id -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "./childComps/HomeHeader/HomeHeader";
import { getUserInfo } from "network/home";

export default {
  name: "Home",
  components: {
    HomeHeader,
  },
  data() {
    return {
      user: {},
    };
  },
  methods: {},
  created() {
    getUserInfo().then((res) => {
      console.log(res);
      this.user = {
        _id: res._id,
        name: res.name,
      };
    });
  },
  computed: {},
};
</script>
