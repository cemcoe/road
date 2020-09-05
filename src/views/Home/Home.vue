<template>
  <div class="home">
    <div id="nav">
      <home-header :user="user"></home-header>
      <post-list :postList="postList" @loadmore="loadmore"></post-list>
      <!-- <router-link to="/">Home</router-link>|
      <router-link to="/login">login</router-link>-->
      <!-- 问题来了，这里的id应该是登录用户的id，如何得到当前用户的id -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "./childComps/HomeHeader/HomeHeader";
import PostList from "./childComps/PostList/PostList";
import { getUserInfo, getHomePostList } from "network/home";

export default {
  name: "Home",
  components: {
    HomeHeader,
    PostList,
  },
  data() {
    return {
      user: {},
      postList: [],
      currentPage: 1,
    };
  },
  methods: {
    loadmore() {
      // 当前的页数加1
      // 将新页数的数据追加
      // console.log(this.currentPage);
      this.currentPage ++;
      getHomePostList(this.currentPage).then((res) => {
        this.postList = []
        this.postList.push(...res)
      });
    },
  },
  created() {
    getUserInfo().then((res) => {
      // console.log(res);
      if (res) {
        this.user = {
          _id: res._id,
          name: res.name,
        };
      } else {
        console.log("请登录");
      }

      // console.log(this.user)
    });

    getHomePostList().then((res) => {
      this.postList = res;
      console.log(this.postList);
    });
  },
  computed: {},
};
</script>
