<template>
  <div class="post-item">
    <router-link :to="postUrl">
      <div class="title">
        <span>{{ post.title }}</span>
      </div>
    </router-link>
    <router-link :to="postUrl">
      <div class="abstract">{{ post.abstract }}</div>
    </router-link>
    <div class="meta">
      <span>
        <router-link :to="authorUrl" class="nickname">{{
          post.author.name
        }}</router-link>
      </span>

      <span class="creat-date">{{ createDate }}</span>
      <span>0阅读</span>
      <span>0评论</span>
      <span>0赞</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {},
  },
  computed: {
    postUrl() {
      return "/p/" + this.post._id;
    },
    authorUrl() {
      return "/u/" + this.post.author._id;
    },
    createDate() {
      return this.post.createdAt.split("T")[0];
    },
  },
};
</script>

<style scoped>
.post-item {
  padding: 16px 8px;
  box-sizing: content-box;
  margin-bottom: 12px;
  background-color: #fff;
}
.title span {
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}
.abstract {
  font-size: 14px;
  color: rgb(97, 101, 105);
  margin-top: 12px;
  margin-bottom: 12px;
  line-height: 26px;
  /* 多行文本截断 */
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.meta {
  font-size: 14px;
  color: #b4b4b4;
  padding-right: 12px;
}

.meta span {
  padding-right: 12px;
}
</style>