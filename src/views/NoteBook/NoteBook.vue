<template>
  <div>
    连载id: {{ $route.params.id }}
    <div class="header">返回</div>
    <div class="meta">
      {{ notebook }}
      <hr>
      <span>title: {{ notebook.title }}</span>
      <hr>
      <span>
        author: {{notebook.author}}
      </span>
      <hr>

      <span>abstract: {{ notebook.abstract }}</span>
      <hr>
    </div>
    <div class="content">
      <h2>目录{{ postList.length }}</h2>
      <div class="postList">
        {{ postList }}
      </div>
    </div>
  </div>
</template>

<script>
import { getNoteBookDetail } from "network/notebook.js";
export default {
  data() {
    return {
      notebook: {},
      postList: [],
    };
  },
  async created() {
    // 获取连载相关信息
    const res = await getNoteBookDetail(this.$route.params.id);
    const notebook = res.data.notebook;
    console.log(notebook);
    this.notebook = notebook;
    // this.postList = notebook.postList;
  },
};
</script>

<style>
</style>