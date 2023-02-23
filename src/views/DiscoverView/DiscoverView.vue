<script setup lang="ts">
import { ref } from "vue";
import { showToast } from "vant";
import { getAppInfo } from "@/service/modules/app";
const labImageURL = new URL("./lab.webp", import.meta.url).href;

function download(url: string, filename: string) {
  var a = document.createElement("a");
  document.body.appendChild(a); //兼容火狐，将a标签添加到body当中
  a.href = url;
  a.download = filename;
  a.target = "_blank"; // a标签增加target属性
  a.click();
  a.remove(); //移除a标签
  window.URL.revokeObjectURL(url);
}

const show = ref(false);
const actions = [{ name: "下载App", action: "download" }];
const onCancel = () => showToast("取消");
const onSelect = (item: any) => {
  if (item.action === "download") {
    console.log("下载");
    showToast("正在获取下载链接");
    getAppInfo().then((res) => {
      const { data } = res;
      const { app } = data;
      console.log(app[0]);
      const { url } = app[0];

      download(url, "road");
    });
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
    <div class="app" @click="clickApp">
      <p class="demo">
        点击下载<del><i>Hybrid</i></del
        >套壳尝鲜版App
      </p>
    </div>

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

.demo {
  background: linear-gradient(to right, red, blue);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
