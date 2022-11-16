<script setup lang="ts">
import type { IPost } from "@/types";
import PostItem from "./PostItem.vue";

defineProps<{
  postList: any[];
}>();
</script>

<template>
  <div>
    <div v-for="post in postList" :key="post._id" class="post">
      <PostItem v-bind="post" />
    </div>
    <van-divider>到底了</van-divider>
  </div>
</template>

<style scoped>
.no-data {
  background-color: var(--main-bgc-color);
  color: var(--main-text-color);
}
</style>
