<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useHomeStore } from "@/stores/home";
import PostList from "@/components/PostList/PostList.vue";

const homeStore = useHomeStore();
homeStore.getHomePostListAction();

const { postList } = storeToRefs(homeStore);
</script>

<template>
  <div class="home">
    <PostList :postList="postList" />
  </div>
</template>

<style scoped></style>
