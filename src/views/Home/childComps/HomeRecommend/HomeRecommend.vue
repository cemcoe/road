<template>
  <div>
    <div class="post-list" v-if="postList.length" @scroll="onScroll">
      <post-list :postList="postList"></post-list>
    </div>
    <div v-else>
      <loading></loading>
    </div>
  </div>
</template>

<script>
import PostList from "components/content/postList/PostList";
import Loading from "components/common/loading/Loading";
import { getHomePostList } from "network/post";
export default {
  name: "HomeRecommend",
  components: {
    PostList,
    Loading,
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
    onScroll() {
      // 上拉加载更多
      console.log("页面进行滚动");
      const postList = document.querySelector(".post-list");

      let clientHeight = postList.clientHeight;
      let scrollHeight = postList.scrollHeight;
      let scrollTop = postList.scrollTop;
      console.log(clientHeight, scrollHeight, scrollTop);

      let distance = 50; //距离底部还有50的时候，开始触发；

      if (scrollTop + clientHeight >= scrollHeight - distance) {
        console.log("到底了，开始加载数据");
        // 加载数据
        this.loadmore();
      }
    },
  },
  created() {
    getHomePostList(this.currentPage).then((res) => {
      console.log(res);
      this.postList = res.data.post;
      console.log(this.postList);
    });
  },
};
</script>

<style scoped>
.post-list {
  background-color: rgb(243, 243, 243);
  position: absolute;
  top: 84px;
  left: 0;
  right: 0;
  bottom: 49px;

  /* height: calc(100vh - 44px - 49px); */
  overflow-y: scroll;
}
</style>