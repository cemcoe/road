<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const showBottom = ref(false);

function chooseEditorMode() {
  router.push("/editor");
}

defineExpose({
  showBottom,
});
</script>

<template>
  <!-- 底部弹出 -->
  <van-popup
    v-model:show="showBottom"
    position="bottom"
    round
    :style="{ padding: '20px' }"
    ><van-grid :column-num="1">
      <van-grid-item
        @click="chooseEditorMode"
        icon="edit"
        text="写文章"
        clickable
      /> </van-grid
  ></van-popup>
</template>
