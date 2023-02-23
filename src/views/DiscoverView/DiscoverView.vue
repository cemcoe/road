<script setup lang="ts">
import { ref } from "vue";
import { showToast } from "vant";
const labImageURL = new URL("./lab.webp", import.meta.url).href;

const show = ref(false);
const actions = [{ name: "下载App", action: "download" }];
const onCancel = () => showToast("取消");
const onSelect = (item: any) => {
  if (item.action === "download") {
    console.log("下载");
  }
};

function clickApp() {
  show.value = true;
}
</script>

<template>
  <div class="discover">
    <van-nav-bar safe-area-inset-top title="探索"> </van-nav-bar>
    <div class="model" @click="$router.push('/lab')">
      <img :src="labImageURL" alt="" />
    </div>
    <div class="app" @click="clickApp">app</div>

    <van-action-sheet
      v-model:show="show"
      :actions="actions"
      cancel-text="取消"
      close-on-click-action
      @select="onSelect"
      @cancel="onCancel"
    />
  </div>
</template>

<style scoped>
.discover {
  background-color: rgb(247, 245, 243);
  min-height: 100vh;
}
.model {
  width: 96vw;
  margin: 20px auto;
  border-radius: 4px;
  overflow: hidden;
}

.app {
  width: 96vw;
  background-color: #ffffff;
  margin: 20px auto;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 4px;
}

.model img {
  width: 100%;
  border-radius: 4px;
}
</style>
