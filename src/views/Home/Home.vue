<template>
  <div class="home">
    <div id="nav">
      <home-header></home-header>
      <div class="post-list">
        <post-list :postList="postList" @loadmore="loadmore"></post-list>
      </div>

      <!-- <router-link to="/">Home</router-link>|
      <router-link to="/login">login</router-link>-->
      <!-- 问题来了，这里的id应该是登录用户的id，如何得到当前用户的id -->
      <!-- <div class="write">
        写文章
      </div>-->
      <div class="write">
        <router-link to="/write">写文章</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "./childComps/HomeHeader/HomeHeader";
import PostList from "components/content/postList/PostList";
import { getHomePostList } from "network/post";

export default {
  name: "Home",
  components: {
    HomeHeader,
    PostList,
  },
  data() {
    return {
      postList: [],
      currentPage: 1,
      perPage: 10,
    };
  },
  methods: {
    loadmore() {
      // 当前的页数加1
      // 将新页数的数据追加
      // console.log(this.currentPage);
      this.currentPage++;
      getHomePostList(this.currentPage).then((res) => {
        if (res.status === 200) {
          // console.log(res);
          this.postList.push(...res.data.post);
          this.$toast.show("数据请求成功", 2000);
          return;
        }
        this.$toast.show("没有数据了", 2000);
      });
    },
  },
  created() {
    getHomePostList(this.currentPage).then((res) => {
      console.log(res);
      this.postList = res.data.post;
      console.log(this.postList);
    });
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
};
</script>

<style scoped>
.post-list {
  height: calc(100vh - 44px - 49px);
  overflow: scroll;
}
.write {
  position: fixed;
  width: 50px;
  height: 50px;
  right: 50px;
  bottom: 70px;
  border-radius: 50%;
  background-color: #f44;
  color: aliceblue;
  line-height: 50px;
  padding: 10px;
  box-shadow: 0 0 4px #000;
}
.write a {
  color: aliceblue;
  width: 100%;
  height: 100%;
  display: block;
}
</style>
