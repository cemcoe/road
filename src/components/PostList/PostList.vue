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
</script>

<template>
  <div class="post" v-for="post in postList" :key="post._id">
    <PostItem v-bind="post" />
  </div>
  <van-divider v-show="isLoading"><van-loading /></van-divider>
  <van-divider v-show="isGetAllData">没有更多数据了</van-divider>
</template>

<style scoped></style>
