<script setup lang="ts">
import { RouterView } from "vue-router";
import TabBar from "./components/TabBar/TabBar.vue";
</script>

<template>
  <router-view class="view" v-slot="{ Component }">
    <keep-alive :include="['HomeView', 'b']">
      <component :is="Component" />
    </keep-alive>
  </router-view>

  <TabBar class="tab-bar phone" v-if="!$route.meta.hideTabBar" />
</template>

<style scoped></style>
