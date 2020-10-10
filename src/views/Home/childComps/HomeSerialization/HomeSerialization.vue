<template>
  <div>
    Serialization
    <hr>
    <div class="items">
      <div class="item" v-for="notebook in notebooks" :key="notebook._id">
        {{ notebook }}
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import { getNoteBookList } from "network/notebook.js";

export default {
  data() {
    return {
      notebooks: [],
    };
  },
  async created() {
    // 获取连载列表
    const res = await getNoteBookList(1, 10);
    this.notebooks = res.data.notebook;
    console.log(res);
  },
};
</script>

<style>
</style>