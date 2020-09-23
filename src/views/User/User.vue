<template>
  <div>
    <user-header></user-header>
    <user-info :userInfo="user"></user-info>
    <div class="follow">
      <button @click="followingUser">关注</button>
      <button @click="unfollowingUser">取消关注</button>

      <div>
        <span>{{followingUsers.length}} 关注</span> ||
        <span>{{followers.length}} 粉丝</span>
      </div>
      <hr />
    </div>
    <!-- 用户文章列表 -->
    <div class="user-posts">
      <h2>文章 ({{userPosts.length}})</h2>
      <post-list :postList="userPosts"></post-list>
    </div>
  </div>
</template>

<script>
import {
  getUserInfo,
  getUserPosts,
  followingUser,
  unfollowingUser,
  listfollowingUser,
  listfollower,
} from "network/user";

import UserHeader from "./childComps/UserHeader/UserHeader";
import PostList from "components/content/postList/PostList";
import UserInfo from "./childComps/UserInfo/UserInfo";

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
    UserHeader,
    UserInfo,
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
      this.$store.dispatch("followingUser", _id);
    },
    unfollowingUser() {
      // 取消当前用户
      this.$store.dispatch("unfollowingUser", _id);
    },
  },
};
</script>

<style scoped>
.follow {
  padding: 10px;
}
</style>