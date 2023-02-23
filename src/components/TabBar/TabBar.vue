<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { tabbarRoutes } from "@/router/tabbarRoutes";
import ModeView from "./ModeView.vue";

const router = useRouter();
const active = ref(0);
const modeViewRef = ref<any>();

function tabbarItemClick(path: string) {
  if (path === "/editor") {
    // console.log("拦截");
    modeViewRef.value.showBottom = true;
    return false;
  }
  router.push(path);
}
</script>

<template>
  <div>
    <ModeView ref="modeViewRef" />
    <van-tabbar
      v-model="active"
      inactive-color="rgb(165 165 165)"
      active-color="#000"
      placeholder
      safe-area-inset-bottom
    >
      <template v-for="(item, index) in tabbarRoutes" :key="index">
        <van-tabbar-item @click="tabbarItemClick(item.path)">
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
  </div>
</template>

<style scoped></style>
