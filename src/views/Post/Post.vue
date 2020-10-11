<template>
  <div class="container">
    <post-header @addPostToNoteBook="addPostToNoteBook"></post-header>
    <div v-if="post.title">
      <div class="title">
        <h2>{{ post.title }}</h2>
      </div>

      <author-info :authorInfo="author"></author-info>

      <post-info :postInfo="post.createdAt"></post-info>

      <hr />

      <post-content :postContent="post.content"></post-content>

      <post-comments :postComments="postComments"></post-comments>

      <post-tab-bar :postId="post._id"></post-tab-bar>

      <note-book-list v-show="isShowNoteBookList"></note-book-list>

      <div
        class="overlay"
        v-show="isShowNoteBookList"
        @click="overlayClick"
      ></div>
    </div>
    <div v-else>
      <loading />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Loading from "components/common/loading/Loading";
import PostHeader from "./childComps/PostHeader/PostHeader";
import AuthorInfo from "./childComps/AuthorInfo/AuthorInfo";
import PostInfo from "./childComps/PostInfo/PostInfo";
import PostContent from "./childComps/PostContent/PostContent";
import PostComments from "./childComps/PostComments/PostComments";
import PostTabBar from "./childComps/PostTabBar/PostTabBar";
import NoteBookList from "./childComps/NoteBookList/NoteBookList";

export default {
  components: {
    Loading,
    PostHeader,
    AuthorInfo,
    PostContent,
    PostInfo,
    PostComments,
    PostTabBar,
    NoteBookList,
  },
  data() {
    return {
      isShowNoteBookList: false,
      // post: this.$store.state.post,
      //   // author: {},
      //   // 要拿到作者的名字
      //   // {{post.author.name}}
      //   // 使用{{}}双花括号在html页面进行数据绑定时，从一个对象中获取，超过两个.就报错，
      //   // 因为获取服务器是异步的，所以 vue 先绑定数据。
      //   // 绑定数据时，你的post赋值为空对象的话，而post里面的author属性便为 undefined，所以报"cannot read property 'name' of undefined"。
      //   // 所以在初始化时，author 属性赋值为空对象就行了。
      // author: this.$store.state.author,
    };
  },
  methods: {
    addPostToNoteBook() {
      console.log("添加到连载按钮被点击，展示连载列表");
      this.isShowNoteBookList = true;
    },
    overlayClick() {
      console.log("遮罩被点击，为你隐藏连载列表");
      this.isShowNoteBookList = false;
    },
  },
  mounted() {
    // getPostDetail(this.$route.params.id).then((res) => {
    //   this.post = res.data.post;
    //   this.author = res.data.post.author;
    //   console.log(this.post);
    // });

    this.$store.dispatch("getPostDetail", this.$route.params.id);
    this.$store.dispatch("getPostComments", this.$route.params.id);
  },
  computed: {
    ...mapState(["post", "author", "postComments"]),
  },
  // 组件销毁，文章数据重置，避免缓存
  destroyed() {
    // 重置文章数据
    this.$store.commit("set_post", {});
    // 重置作者数据
    this.$store.commit("set_author", {});
  },
};
</script>

<style scoped>
h2 {
  padding: 10px;
}
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 29999;
  background-color: #000;
  opacity: 0.8;
}
</style>