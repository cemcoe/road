<template>
  <div>
    <div class="post-list" v-if="postList.length">
      <post-list :postList="postList" @loadmore="loadmore"></post-list>
    </div>
    <div v-else>
      <loading></loading>
    </div>
  </div>
</template>

<script>
import PostList from "components/content/postList/PostList";
import Loading from 'components/common/loading/Loading'
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
  overflow: scroll;
}
</style>