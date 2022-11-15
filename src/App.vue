<script setup lang="ts">
import { RouterView } from "vue-router";
import TabBar from "./components/TabBar/TabBar.vue";
</script>

<template>
  <RouterView />
  <TabBar v-if="!$route.meta.hideTabBar" />
</template>

<style scoped></style>
