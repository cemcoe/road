<script setup lang="ts">
import { tabbarRoutes } from "@/router/tabbarRoutes";
</script>

<template>
  <van-tabbar
    route
    inactive-color="rgb(165 165 165)"
    active-color="#000"
    placeholder
  >
    <template v-for="(item, index) in tabbarRoutes" :key="index">
      <van-tabbar-item :to="item.path">
        <span style="font-size: 14px">{{ item.meta.text }}</span>
        <template #icon>
          <van-icon
            v-if="item.meta.iconType === 'vant'"
            size="20"
            :name="item.meta.iconName"
          />
          <van-icon
            v-else
            class-prefix="my-icon"
            size="20"
            :name="item.meta.iconName"
          />
        </template>
      </van-tabbar-item>
    </template>
  </van-tabbar>
</template>

<style scoped></style>
