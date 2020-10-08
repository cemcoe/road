<template>
  <div class="author-posts">
    <h2>文章 ({{ authorPosts.length }})</h2>
    <post-list :postList="authorPosts"></post-list>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PostList from "components/content/postList/PostList";
export default {
  name: "AuthorPosts",
  components: {
    PostList,
  },
  created() {
    this.$store.dispatch("listAuthorPosts", this.$route.params.id);
  },
  computed: {
    ...mapState(["authorPosts"]),
  },
  // 组件销毁，数据重置，避免缓存
  destroyed() {
    this.$store.commit("receive_author_posts", []);
  },
};
</script>

<style>
</style>