<template>
  <div class="post-item">
    <div class="title">
      <router-link :to="'/p/' + post._id">{{post.title}}</router-link>
    </div>
    <div class="abstract">{{post.abstract}}</div>
    <div class="meta">
      <!-- <a :href="'/u/' + item.author._id">{{item.author.name}}</a> -->
      <router-link :to="'/u/' + post.author._id" class="nickname">{{post.author.name}}</router-link>
      <span class="creat-date">{{post.createdAt}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {},
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
.title a {
  font-weight: 700;
  font-size: 18px;
  color: #000000;
}
.abstract {
  font-size: 16px;
  color: rgb(97, 101, 105);
  /* height: 60px;
  overflow: hidden; */
  padding-top: 12px;
  padding-bottom: 12px;
  line-height: 26px;
}
.meta {
  font-size: 14px;
}

.meta .nickname,
.creat-date {
  color: #b4b4b4;
  padding-right: 12px;
}
</style>