<script setup lang="ts">
import { tabbarRoutes } from "@/router/tabbarRoutes";
import { getAssetURL } from "@/utils/getAssetsImg";
</script>

<template>
  <div class="container">
    <van-tabbar route active-color="#ff9845">
      <template v-for="(item, index) in tabbarRoutes" :key="index">
        <van-tabbar-item replace :to="item.path">
          <span>{{ item.meta.text }}</span>
          <template #icon="props">
            <img
              :src="
                props.active
                  ? getAssetURL(item.meta.imageActive)
                  : getAssetURL(item.meta.image)
              "
            />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<style scoped>
.container {
  height: var(--van-tabbar-height);
}
img {
  height: 30px;
}
</style>
