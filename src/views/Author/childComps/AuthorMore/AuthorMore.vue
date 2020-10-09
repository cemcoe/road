<template>
  <div>
    <div class="items">
      <div class="item">文集</div>
      <div class="item">专题</div>
      <div class="item">关注</div>
      <div class="item">粉丝</div>
    </div>
    <h3>创建新连载</h3>
    <div class="notebook">
      连载名：<input type="text" v-model="noteBookTitle" />
      <button @click="createNoteBook" :disabled="isValidTitle">提交</button>
    </div>
  </div>
</template>

<script>
import { createNoteBook } from "network/notebook.js";
export default {
  data() {
    return {
      noteBookTitle: "",
      notebook: {},
    };
  },
  methods: {
    // 创建连载
    async createNoteBook() {
      console.log("这就为你创建连载");
      // 数据格式
      let data = {
        title: this.noteBookTitle,
      };
      // 发送网络请求
      const result = await createNoteBook(data);
      console.log(result);
      this.notebook = result.data.notebook;
      // 连载创建成功， 跳转连载详情页
      setTimeout(() => {
        // 跳转到连载详情页
        this.$router.replace(`/nb/${this.notebook._id}`);
      }, 1000);
    },
  },
  computed: {
    isValidTitle() {
      return !this.noteBookTitle;
    },
  },
};
</script>

<style scoped>
.items {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 60px;
  box-shadow: 0 0 4px rgb(218, 211, 211);
}
.items .item {
  background-color: rgb(250, 245, 245);
  text-align: center;
  padding-top: 40px;
}

input {
  box-shadow: 0 0 4px #000;
}
</style>