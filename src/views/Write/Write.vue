<template>
  <div>
    <input type="text" class="title" v-model="title" />
    <input type="text" class="content" v-model="content" size="100" />
    <button @click="btnClick">提交</button>
  </div>
</template>

<script>
import { createPost } from "network/write";
export default {
  data() {
    return {
      title: "这里输入标题",
      content: "这里输入内容",
    };
  },
  methods: {
    btnClick() {
      // 将文章传到后端
      createPost(this.title, this.content).then((res) => {
        console.log("文章创建成功");
        // TODO:
        // 文章创建成功， 跳转文章详情页
        this.$router.push("/")
      });
    },
  },
};
</script>

<style scoped>
input {
  width: 60%;
}
.content {
  height: 300px;
}
</style>