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
      <button>简信</button>
      <button @click="followingUser">关注</button>
      <button @click="unfollowingUser">取消关注</button>
      <button>礼物</button>

      <div class="follow">
        <span>{{followingUsers.length}} 关注</span> ||
        <span>{{followers.length}} 粉丝</span>
      </div>
      <hr />

      <div>简书优秀创作者</div>

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
import {
  getUserPosts,
  followingUser,
  unfollowingUser,
  listfollowingUser,
  listfollower,
} from "network/user.js";

import PostList from "components/content/postList/PostList";

export default {
  name: "Profile",
  data() {
    return {
      _id: null,
      // 用户信息
      user: {},
      userPosts: [],
      followingUsers: [], // 关注
      followers: [], // 粉丝
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
      // console.log(res);
      this.userPosts = res.data;
    });
    // 获取用户的关注列表
    listfollowingUser(this._id).then((res) => {
      // console.log(res);
      // this.userPosts = res.data;
      this.followingUsers = res.data.following;
    });
    // 获取用户粉丝列表
    listfollower(this._id).then((res) => {
      // console.log(res)
      this.followers = res.data.followers;
    });
  },
  methods: {
    followingUser() {
      // 关注当前用户
      followingUser(this._id).then((res) => {
        if (res.status === 401) {
          console.log("关注失败");
          return;
        }
        console.log("关注成功");
      });
    },
    unfollowingUser() {
      // 取消当前用户
      unfollowingUser(this._id).then((res) => {
        if (res.status === 401) {
          console.log("取消关注失败");
          return;
        }
        console.log("取消关注成功");
      });
    },
  },
};
</script>

<style>
</style>