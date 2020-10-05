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
      <input type="text" class="title" placeholder="输入标题" v-model="post.title" />
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
export default {
  data() {
    return {
      title: "",
      abstract: "",
      content: "",
    };
  },
  created() {
    // 拿到文章id
    let postId = this.$route.params.id;
    console.log(postId);
    // 触发actions获取文章数据
    this.$store.dispatch('getPostDetail', postId)
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
    },
  },

  computed: {
    rightPost() {
      return this.title && this.abstract && this.content;
    },
    post() {
      return this.$store.state.post
    }
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