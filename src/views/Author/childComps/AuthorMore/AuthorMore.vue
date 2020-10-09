<template>
  <div>
    <div class="items">
      <div class="item">文集</div>
      <div class="item">专题</div>
      <div class="item">关注</div>
      <div class="item">粉丝</div>
    </div>

    <hr>
    <h3>创建新连载</h3>
    <div class="notebook">
      连载名：<input type="text" v-model="noteBookTitle" />
      <button @click="createNoteBook" :disabled="isValidTitle">提交</button>

      <hr>

      <h2>连载列表开发中。。。</h2>
      <div class="list">
        <div class="item" v-for="notebook in notebooks" :key="notebook._id">
          <router-link :to="'/nb/' + notebook._id">
            {{ notebook.title }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNoteBook } from "network/notebook.js";
import { getAuthorNoteBooks } from "network/user.js";
export default {
  data() {
    return {
      noteBookTitle: "",
      notebook: {},
      notebooks: [], // 作者连载列表
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
  async created() {
    // 获取连载列表
    const res = await getAuthorNoteBooks(this.$route.params.id);
    this.notebooks = res.data.notebooks;
    console.log(res);
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