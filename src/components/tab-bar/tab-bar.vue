<script setup>
// import tabbarData from "@/assets/localData/tabbar.js";
import { tabbarRoutes } from "@/router/tabbar-routes";
import { getAssetURL } from "@/utils/get_assets_img.js";
</script>

<template>
  <div class="container">
    <van-tabbar route active-color="#ff9845">
      <template v-for="(item, index) in tabbarRoutes">
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
