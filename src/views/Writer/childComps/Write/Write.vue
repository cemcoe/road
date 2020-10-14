<template>
  <div>
    <write-header @preview="preview" @publish="publish"></write-header>
    <div class="write">
      <textarea
        type="text"
        class="title"
        placeholder="请输入标题"
        v-model="title"
      />
      <div id="main">
        <mavon-editor
          :subfield="false"
          :toolbarsFlag="false"
          placeholder="请输入正文"
          v-model="content"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { createPost } from "network/post";
import WriteHeader from "./childComps/WriteHeader/WriteHeader";
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  components: {
    WriteHeader,
  },
  methods: {
    createNewPost() {
      let post = {
        title: this.title,
        content: this.content,
      };
      createPost(post).then((res) => {
        console.log("文章创建成功", res);
        this.$toast.show("文章创建成功，1s后为您跳转到文章页面");
        // 文章创建成功， 跳转文章详情页
        setTimeout(() => {
          // 跳转到文章详情页
          this.$router.replace(`/p/${res._id}`);
        }, 1000);
      });
    },

    // 检查内容是否填写完整
    rightPost() {
      return this.title && this.content;
    },

    preview() {
      if (!this.rightPost()) {
        this.$toast.show("哇哦，内容没有填写完整");
      } else {
        this.$toast.show("还没写呢");
      }
    },
    publish() {
      // this.$toast.show("父组件接受到publish事件");
      // 发布前检查
      if (!this.rightPost()) {
        this.$toast.show("哇哦，内容没有填写完整");
      } else {
        this.createNewPost();
      }
    },
  },

  computed: {},
};
</script>

<style scoped>
textarea {
  width: 98%;
  margin: 0 auto;
  padding: 10px;
  border: 0;
  box-sizing: border-box;
}
</style>