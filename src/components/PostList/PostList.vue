<script setup lang="ts">
import PostItem from "./PostItem.vue";
defineProps<{
  postList: any[];
}>();
</script>

<template>
  <div class="post" v-for="post in postList" :key="post._id">
    <PostItem v-bind="post" />
  </div>
  <van-divider><van-loading /></van-divider>
</template>

<style scoped></style>
