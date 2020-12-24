<template>
  <div>
    <write-header
      @preview="preview"
      @publish="publish"
      :wordcount="wordcount"
    ></write-header>
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
          :toolbars="{
            bold: true, // 粗体
            italic: true, // 斜体
            header: true, // 标题
            imagelink: true, // 图片链接
            code: true, // code
            undo: true, // 上一步
            redo: true, // 下一步
            preview: true, // 预览
            htmlcode: true, // 展示html源码
          }"
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
      status: 1,
      wordcount: 0, // 字数
    };
  },
  components: {
    WriteHeader,
  },
  methods: {
    createNewPost() {
      // 发布文章
      let post = {
        title: this.title,
        content: this.content,
        status: this.status,
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
        this.$toast.show("还没写呢，私密文章保存成功，不会出现在首页");
        // 更改文章status
        this.status = -1;
        setInterval(() => {
          this.createNewPost();
        }, 1000);
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
  watch: {
    title: () => {
      console.log("title change");
    },
    content: function (newContent, oldContent) {
      console.log("content change");
      this.wordcount = newContent.length;
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