<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { tabbarRoutes } from "@/router/tabbarRoutes";
import ModeView from "./ModeView.vue";

const route = useRoute();
const router = useRouter();

const active = ref();
const modeViewRef = ref<any>();

function beforeChange(name: string) {
  if (name === "/editor") {
    // console.log("拦截");
    modeViewRef.value.showBottom = true;
    return false;
  }
  active.value = name;
  router.push(name);
}

watchEffect(() => {
  active.value = route.path;
});
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
      :before-change="beforeChange"
    >
      <template v-for="(item, index) in tabbarRoutes" :key="index">
        <van-tabbar-item :name="item.path">
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
