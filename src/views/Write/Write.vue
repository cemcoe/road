<template>
  <div>
    <button @click="btnClick" :disabled="!rightPost" :class="{ on: rightPost }">
      提交，确保内容填写完整，否则无法提交
      {{$route.params.id}}
    </button>
    <input type="text" class="title" placeholder="输入标题" v-model="title" />
    <input
      type="text"
      class="abstract"
      placeholder="输入摘要"
      v-model="abstract"
    />
    <div id="main">
      <mavon-editor :subfield="false" v-model="content" />
    </div>
  </div>
</template>

<script>
// TODO 
// 拦截请求，如果是从文章详情页跳转过来的
// 就是修改文章，修改文章数据
//  {{$route.params.id}}
// 那文章id获取文章最初的数据，为修改准备


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
        console.log("文章创建成功", res);
        this.$toast.show("文章创建成功，1s后为您跳转到文章页面");
        // 文章创建成功， 跳转文章详情页
        setTimeout(() => {
          // 跳转到文章详情页
          this.$router.push(`/p/${res._id}`);
        }, 1000);
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