<template>
  <div>
    <div class="edit">
      <button
        @click="btnClick"
        :disabled="!rightPost"
        :class="{ on: rightPost }"
      >
        编辑文章，确保内容填写完整，否则无法提交，否则无法提交
        {{ $route.params.id }}
      </button>
      <input
        type="text"
        class="title"
        placeholder="输入标题"
        v-model="post.title"
      />
      <input
        type="text"
        class="abstract"
        placeholder="输入摘要"
        v-model="post.abstract"
      />
      <div id="main">
        <mavon-editor :subfield="false" v-model="post.content" />
      </div>
    </div>
  </div>
</template>

<script>
import { updatePost } from "network/post";
export default {
  data() {
    return {
      postId: null,
    };
  },
  created() {
    // 拿到文章id
    this.postId = this.$route.params.id;
    console.log(this.postId);
    // 触发actions获取文章数据
    this.$store.dispatch("getPostDetail", this.postId);
  },
  methods: {
    async btnClick() {
      // 将文章传到后端
      // 这里格式
      let post = {
        title: this.$store.state.post.title,
        abstract: this.$store.state.post.abstract,
        content: this.$store.state.post.content,
      };
      console.log(post);
      // 将数据发到后端
      const result = await updatePost(post, this.postId);
      if (result.status === 200) {
        this.$toast.show("文章修改成功，1s后为您跳转到文章页面");
        // 文章修改成功， 跳转文章详情页
        setTimeout(() => {
          // 跳转到文章详情页
          this.$router.replace(`/p/${result.data.post._id}`);
        }, 1000);
      }
      console.log(result, 1111111111111111111111111);
    },
  },

  computed: {
    rightPost() {
      return (
        this.$store.state.post.title &&
        this.$store.state.post.abstract &&
        this.$store.state.post.content
      );
    },
    post() {
      return this.$store.state.post;
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