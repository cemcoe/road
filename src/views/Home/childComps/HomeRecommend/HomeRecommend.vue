<template>
  <div class="recommend">
    <div class="post-list" v-if="postList.length" @scroll="onScroll">
      <post-list :postList="postList"></post-list>
    </div>
    <div v-else>
      <loading></loading>
    </div>

    <transition name="fade">
      <alert-tip
        :alertText="alertText"
        @closeTip="closeTip"
        v-if="isShowAlert"
      ></alert-tip>
    </transition>

    <go-writer-button />
  </div>
</template>

<script>
import PostList from "components/content/postList/PostList";
import Loading from "components/common/loading/Loading";
import AlertTip from "components/common/AlertTip/AlertTip";
import GoWriterButton from "components/content/goWriterButton/GoWriterButton";
import { getHomePostList } from "network/post";

import { getAnnouncementDetail } from "network/announcement";

import { _throttle } from "@/utils/gloal";

export default {
  name: "HomeRecommend",
  components: {
    PostList,
    Loading,
    GoWriterButton,
    AlertTip,
  },
  data() {
    return {
      postList: [],
      currentPage: 0,
      isShowAlert: false,
      alertText: '',
    };
  },
  methods: {
    closeTip() {
      this.isShowAlert = false;
      // 不展示弹出内容
    },

    async getAnnouncement() {
      const res = await getAnnouncementDetail();
      const announcement = res.data.announcement.content
      this.alertText = announcement
      this.isShowAlert = true
    },

    async loadmore() {
      // 当前的页数加1
      // 将新页数的数据追加
      // console.log(this.currentPage);
      this.currentPage++;
      const res = await getHomePostList(this.currentPage);
      console.log(res, this.currentPage);
      if (res.status === 404) {
        this.$toast.show("没有数据了", 2000);
        return;
      } else if (res.status === 200) {
        this.postList.push(...res.data.post);
        this.$toast.show("数据请求成功" + this.currentPage, 2000);
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

      if (scrollTop + clientHeight >= scrollHeight - distance) {
        console.log("到底了，开始加载数据");
        // 加载数据
        this.loadmore();
      }
    }, 800),
  },
  created() {
    this.getAnnouncement();
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
</style>