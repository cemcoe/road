<script setup>
import { RouterView } from "vue-router";
import TabBar from "@/components/tab-bar/tab-bar.vue";
</script>

<template>
  <router-view v-slot="{ Component }">
    <keep-alive include="home">
      <component :is="Component" />
    </keep-alive>
  </router-view>

  <TabBar v-if="!$route.meta.hideTabBar"></TabBar>
</template>

<style scoped></style>
