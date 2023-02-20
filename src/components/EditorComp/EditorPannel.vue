<script setup lang="ts">
import { useMenu } from "./useMenu";

const emits = defineEmits(["insert", "saveToPrivatePost"]);

const insert = (val: string) => {
  console.log("insert", val);
  emits("insert", val);
};

const { showMenu, switchMeunStatus } = useMenu();
</script>

<template>
  <div class="pannel" :class="{ 'top-pannel': showMenu }">
    <div class="symbols">
      <button @click="insert('![]()')"><van-icon name="photo-o" /></button>
      <button @click="insert('A')">A</button>
      <button @click="insert('[]()')"><van-icon name="link-o" /></button>
      <button @click="insert('# ')">#</button>
      <button @click="insert('* ')">*</button>
      <button @click="insert('- ')">-</button>
    </div>
    <div
      class="setting"
      :class="{ 'top-pannel': showMenu }"
      @click="switchMeunStatus"
    >
      <van-icon name="setting-o" />
    </div>

    <div v-show="showMenu" class="menu">
      <van-cell-group>
        <van-cell title="Cell title" is-link />
        <van-cell title="Cell title" is-link value="Content" />
        <van-cell
          title="Cell title"
          is-link
          arrow-direction="down"
          value="Content"
        />
      </van-cell-group>
    </div>
  </div>
</template>

<style scoped>
.pannel {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 100;
  background-color: rgb(244, 239, 239);
  height: 49px;
  line-height: 49px;
}

.pannel .symbols button {
  margin-left: 20px;
  margin-right: 20px;
}

.pannel .setting {
  position: fixed;
  right: 0px;
  bottom: 0px;
  width: 49px;
  height: 49px;
  text-align: center;
  line-height: 49px;

  border-left: 1px solid rgb(124, 122, 122);
}

.top-pannel {
  bottom: 260px !important;
}
.menu {
  font-size: 14px;
}
</style>
