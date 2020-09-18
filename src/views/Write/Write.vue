<template>
  <div>
    <button @click="btnClick" :disabled="!rightPost" :class="{on:rightPost}">提交，确保内容填写完整，否则无法提交</button>
    <input type="text" class="title" placeholder="输入标题" v-model="title" />
    <input type="text" class="abstract" placeholder="输入摘要" v-model="abstract" />
    <!-- <input type="text" class="content" v-model="content" /> -->

    <textarea class="content" rows="5" cols="40" placeholder="输入内容" v-model="content"></textarea>
  </div>
</template>

<script>
import { createPost } from "network/post";
export default {
  data() {
    return {
      title: "",
      abstract: "",
      content: "",
    };
  },
  methods: {
    btnClick() {
      // 将文章传到后端
      // 这里格式
      let post = {
        title: this.title,
        abstract: this.abstract,
        content: this.content,
      };
      createPost(post).then((res) => {
        console.log("文章创建成功");
        // TODO:
        // 文章创建成功， 跳转文章详情页
        this.$toast.show("文章创建成功", 2000);
        this.$router.push("/");
      });
    },
  },

  computed: {
    rightPost() {
      return this.title && this.abstract && this.content;
    },
  },
};
</script>

<style scoped>
input,
textarea {
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
}
textarea {
  padding: 4px;
  height: 300px;
}


button {
  width: 100%;
  height: 44px;
  margin-bottom: 10px;
}
.on {
  background-color: green;
}
</style>