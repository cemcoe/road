<template>
  <div class="recommend">
    <div class="post-list" v-if="postList.length" @scroll="onScroll">
      <post-list :postList="postList"></post-list>
    </div>
    <div v-else>
      <loading></loading>
    </div>
    <go-writer-button />

    <div class="page-state">
      {{ isLoadMore? currentPage: '亲，数据已经加载完咯' }}
    </div>
  </div>
</template>

<script>
import PostList from "components/content/postList/PostList";
import Loading from "components/common/loading/Loading";
import GoWriterButton from "components/content/goWriterButton/GoWriterButton";
import { getHomePostList } from "network/post";

import { _throttle } from "@/utils/gloal";

export default {
  name: "HomeRecommend",
  components: {
    PostList,
    Loading,
    GoWriterButton,
  },
  data() {
    return {
      postList: [],
      currentPage: 0,
      isLoadMore: true, // 是否有必须尝试请求更多的数据
    };
  },
  methods: {
    async loadmore() {
      // 当前的页数加1
      // 将新页数的数据追加
      // console.log(this.currentPage);
      this.currentPage++;
      const res = await getHomePostList(this.currentPage);
      console.log(res, this.currentPage);
      if (res.status === 404) {
        this.$toast.show("没有数据了", 2000);
        // 该页没有数据了，以后也不会有了，你不用调用我了，一滴也没有了
        this.isLoadMore = false
        return;
      } else if (res.status === 200) {
        this.postList.push(...res.data.post);
        this.$toast.show("数据请求成功" + this.currentPage, 2000);
        // 该页有数据，下一页可能还有数据，你可以试一试调用我
        return;
      }
    },

    onScroll: _throttle(function () {
      // 上拉加载更多

      const postList = document.querySelector(".post-list");

      console.log("页面进行滚动");

      let { clientHeight, scrollHeight, scrollTop } = postList;

      console.log(clientHeight, scrollHeight, scrollTop);

      let distance = 220; //距离底部还有220的时候，开始触发；

      if (scrollTop + clientHeight >= scrollHeight - distance && this.isLoadMore) {
        console.log("到底了，开始加载数据");
        // 加载数据
        // 判断本页是否有数据，如果本页已经没有数据了那么下页也不会有了，也犯不着调用代码了

        this.loadmore();
      }
    }, 800),
  },
  created() {
    this.loadmore();
  },
};
</script>

<style scoped>
.post-list {
  background-color: rgb(243, 243, 243);

  height: calc(100vh - 44px - 49px);
  overflow-y: scroll;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.page-state {
  position: fixed;
  right: 0;
  bottom: 50px;
  padding: 4px 16px;
  background-color: rgba(0, 0, 0, 0.6);
  color: aliceblue;
}
</style>