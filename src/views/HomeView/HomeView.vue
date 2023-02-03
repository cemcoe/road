<script setup lang="ts">
import { ref, watch, onActivated } from "vue";
import { storeToRefs } from "pinia";
import { useHomeStore } from "@/stores/home";
import { useScroll } from "@/hooks/useScroll";
import HomeNavBar from "./components/HomeNavBar.vue";
import PostList from "@/components/PostList/PostList.vue";

const homeStore = useHomeStore();
homeStore.getHomePostListAction();

const { postList } = storeToRefs(homeStore);

// 后面记得改
const homeScroll = ref<any>();
const { isReachBottom, scrollTop } = useScroll(homeScroll);

watch(isReachBottom, async () => {
  console.log(isReachBottom.value);
  if (isReachBottom.value) {
    await homeStore.getHomePostListAction();
    isReachBottom.value = false;
  }
});

watch(scrollTop, () => {
  if (scrollTop.value > 60) {
    console.log("doing");
  }
});

onActivated(() => {
  homeScroll.value.scrollTo({
    top: scrollTop.value,
  });
});
</script>

<template>
  <div class="home">
    <HomeNavBar />
    <div class="home-scroll" ref="homeScroll">
      <div class="post-list-container">
        <template v-if="postList.length === 0">
          <van-skeleton :row="3" />
          <van-skeleton :row="3" />
          <van-skeleton :row="3" />
        </template>
        <PostList :postList="postList" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-scroll {
  height: calc(100vh - 46px - 50px);
  overflow-y: auto;
}
</style>
