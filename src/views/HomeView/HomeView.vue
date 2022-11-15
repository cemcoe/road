<script setup lang="ts">
import { ref } from "vue";
import type { IPost } from "@/types";
import { getHomePostList } from "@/service/modules/home";

const postList = ref<IPost[]>([]);
getHomePostList().then((res) => {
  const { status, data } = res;
  console.log(status, data);
  if (status === 200) {
    postList.value = data.post;
  }
});
</script>

<template>
  <div class="home">
    <h2 v-for="post in postList" :key="post._id">{{ post.title }}</h2>
  </div>
</template>

<style scoped></style>
