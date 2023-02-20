<script setup lang="ts">
import PostItem from "./PostItem.vue";
withDefaults(
  defineProps<{
    postList: any[];
    isLoading?: boolean;
    isGetAllData?: boolean;
  }>(),
  {
    isLoading: false,
    isGetAllData: false,
  }
);

const images = [
  "https://cdn.pixabay.com/photo/2022/02/06/15/58/squirrel-6997505_960_720.jpg",
  "https://cdn.pixabay.com/photo/2022/10/21/08/39/cat-7536508_960_720.jpg",
  "https://cdn.pixabay.com/photo/2022/11/14/19/25/squirrel-7592356_960_720.jpg",
];

const labImageURL = new URL("./lab.png", import.meta.url).href;

function goNewPage(href: string) {
  window.location.href = href;
}
</script>

<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="image in images" :key="image">
      <img style="width: 100%; height: 100%" :src="image" />
    </van-swipe-item>
    <template #indicator="{ active, total }">
      <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
    </template>
  </van-swipe>
  <van-grid style="margin: 10px">
    <van-grid-item
      style="display: flex; flex-direction: column"
      @click="$router.push('/lab')"
    >
      <van-image :src="labImageURL" />
    </van-grid-item>
    <van-grid-item
      @click="goNewPage('https://github.com/cemcoe')"
      icon="photo-o"
      text="Github"
    />
    <van-grid-item
      @click="goNewPage('https://www.jianshu.com/u/e20f22d3e8d3')"
      icon="photo-o"
      text="简书"
    />
    <van-grid-item
      style="display: flex; flex-direction: column"
      @click="$router.push('/lab')"
    >
      <van-image :src="labImageURL" />
    </van-grid-item>
  </van-grid>
  <div class="post" v-for="post in postList" :key="post._id">
    <PostItem v-bind="post" />
  </div>
  <van-divider v-show="isLoading"><van-loading /></van-divider>
  <van-divider v-show="isGetAllData">没有更多数据了</van-divider>
</template>

<style scoped>
.my-swipe {
  width: 100vw;
  height: 40vw;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  color: #fff;
  background: #000;
}
</style>
