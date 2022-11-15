<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useHomeStore } from "@/stores/home";

const homeStore = useHomeStore();
homeStore.getHomePostListAction();

const { postList } = storeToRefs(homeStore);
</script>

<template>
  <div class="home">
    <h2 v-for="post in postList" :key="post._id">{{ post.title }}</h2>
  </div>
</template>

<style scoped></style>
