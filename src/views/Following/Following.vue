<template>
  <div>
    <following-header></following-header>
    <!-- 
      不使用action的情况下，请求关注用户列表的逻辑：
      // 我要知道当前登录的用户是谁，该信息存在state中，$store.state.user._id
      // 我要在data中维护一个用户关注列表数组
      // 我要在该页面发送网络请求，请求登录用户的关注列表
      // 将该用户列表的数据更新到data中的数组里面

      // 这里有一些点
      // 我要获取登录用户id，即访问state，这在很多页面都需要知道当前登录用户的id，每个页面都向state要，有点琐碎
      // 既然很多请求都要用到登录用户id，为什么不把网络请求放到vuex中去做，而在必要的时候触发，

      // 在vuex action 中定义网络请求有以下优点
      // 1. 不必再向vuex请求用户id了，因为就在vuex中写
      // 2. 数据是响应式，当用户取关或新关注用户时，可以直接展示最新信息，更易于管理。
      // 3. 有些网络请求可能在不同页面触发，这里就会出现冗余代码，比如在following需要知道当前
      // 用户的关注情况，并且在User页面和Profile页面需要展示用户关注的用户数和粉丝数，
      // 如果每个页面都先向state询问登录用户的id再向api发请求，可能用户的关注信息一直都没有发生变化，
      // 而请求却发送了好些遍。

      // 获取当前登录用户的id
    // 拿id去请求关注列表
    ///////////////////////////////
    id为{{$store.state.user._id}}的用户，关注的用户列表
    ///////////////////////////////////////////////
    <div class="follow">
      <ul>
        <li v-for="user in followingUsers" :key="user._id">{{user}}
          /////////////////////////////////////////
        </li>
      </ul>
      {{$store.followingUsers}}
    </div> -->
    <user-list></user-list>

    <div>
      <h2>最近更新文章，最近动态等，按时间排序，后端接口开发中。。。</h2>
      <hr />
      <div class="post-list" v-if="posts.length">
        <post-list :postList="posts"></post-list>
      </div>
    </div>
  </div>
</template>

<script>
import FollowingHeader from "./childComps/FollowingHeader/FollowingHeader";
import UserList from "./childComps/UserList/UserList";
import PostList from "components/content/postList/PostList";

import { listfollowingUser } from "network/user";
export default {
  name: "Following",
  data() {
    return {
      // userId: this.$store.state.user._id,
      // followingUsers: this.$store.followingUsers, // 用户关注列表
      posts: [],
    };
  },
  components: {
    FollowingHeader,
    UserList,
    PostList,
  },
  async mounted() {
    // 请求用户关注列表
    this.$store.dispatch("listfollowingUser");
    // 请求用户关注用户的文章列表
    this.posts = (
      await listfollowingUser(this.$store.state.user._id, "posts")
    ).data.postList;
    console.log(this.posts);
  },
  computed: {},
};
</script>

<style scoped>
</style>