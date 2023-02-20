<script setup lang="ts">
import { ref, watch, onActivated } from "vue";
import { storeToRefs } from "pinia";
import { useHomeStore } from "@/stores/home";
import { useScroll } from "@/hooks/useScroll";
import HomeNavBar from "./components/HomeNavBar.vue";
import PostList from "@/components/PostList/PostList.vue";

const homeStore = useHomeStore();
homeStore.getHomePostListAction();

const { postList, isLoading, isGetAllData } = storeToRefs(homeStore);

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
      <div class="post-list-container main">
        <PostList
          :postList="postList"
          :isLoading="isLoading"
          :isGetAllData="isGetAllData"
        />
        <template v-if="postList.length === 0">
          <van-skeleton :row="3" />
          <van-skeleton :row="3" />
          <van-skeleton :row="3" />
        </template>
      </div>
      <div class="pc">
        <div class="info">
          <div class="image">
            <img width="300" src="@/assets/img/code.svg" alt="" />
          </div>
          <div class="text">可扫描二维码体验手机版哦</div>
        </div>
        <div class="info">
          <div class="text">移动端优先，电脑版适配中。。。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-scroll {
  height: calc(100vh - 46px - 50px);
  overflow-y: auto;
  /* background-color: #ccc; */
  /* margin: 30px; */
  display: flex;
}

.info {
  width: 360px;
  height: 360px;
  background-color: #fff;
  margin: 10px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.text {
  font-size: 20px;
}
</style>
