<template>
  <div>
    <user-header></user-header>
    <user-info :userInfo="author"></user-info>
    <div class="follow">
      <span>是否已经关注{{$store.getters.isFollowingAuthor}}</span>
      <button v-if="!$store.getters.isFollowingAuthor" @click="followingUser">关注</button>
      <button v-else @click="unfollowingUser">取消关注</button>

      <div>
        <span>{{ authorFollowingUsers.length }} 关注</span> ||
        <span>{{ authorFollowers.length }} 粉丝</span>
      </div>
      <hr />
    </div>
    <!-- 用户文章列表 -->
    <div class="user-posts">
      <h2>文章 ({{ userPosts.length }})</h2>
      <post-list :postList="userPosts"></post-list>
    </div>
  </div>
</template>

<script>
import {
  getUserPosts,
  listfollowingUser,
  listfollower,
} from "network/user";

import UserHeader from "./childComps/UserHeader/UserHeader";
import PostList from "components/content/postList/PostList";
import UserInfo from "./childComps/UserInfo/UserInfo";

import { mapState } from "vuex";

export default {
  name: "User",
  data() {
    return {
      _id: null,
      userPosts: [],
      authorFollowingUsers: [], // 关注
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
    this.$store.dispatch('getAuthorInfo', this._id)
    this.$store.dispatch('listAuthorFollowingUser', this._id)
    getUserPosts(this._id).then((res) => {
      this.userPosts = res.data;
    });
    // 获取作者的关注列表
    listfollowingUser(this._id).then((res) => {
      this.authorFollowingUsers = res.data.following;
    });
  },
  methods: {
    followingUser() {
      // 关注当前用户
      this.$store.dispatch("followingUser", this._id);
    },
    unfollowingUser() {
      // 取消关注当前用户
      this.$store.dispatch("unfollowingUser", this._id);
    },
  },

  computed: {
    ...mapState(['author', 'authorFollowers'])

  },

  // 组件销毁，数据重置，避免缓存
  destroyed() {
    this.$store.commit('set_author', {})
  }
};
</script>

<style scoped>
.follow {
  padding: 10px;
}
</style>