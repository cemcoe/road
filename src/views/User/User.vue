<template>
  <div>
    <div v-if="!user._id">查无此人</div>
    <div v-else>
      <!-- 用户信息 -->
      <div class="user-info">
        <h2>用户</h2>
        <!-- {{user._id}} -->
        {{user.name}}
        {{user.gender}}
      </div>

      <!-- 用户文章列表 -->
      <div class="user-posts">
        <h2>文章</h2>
        <post-list :postList="userPosts"></post-list>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserInfo } from "network/profile.js";
import { getUserPosts } from "network/user.js";

import PostList from "components/content/postList/PostList";

export default {
  name: "Profile",
  data() {
    return {
      _id: null,
      // 用户信息
      user: {},
      userPosts: [],
    };
  },
  components: {
    PostList,

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
    // 获取用户的文章列表
    getUserPosts(this._id).then((res) => {
      console.log(res);
      this.userPosts = res.data
    });
  },
};
</script>

<style>
</style>