<template>
  <div class="post-item">
    <router-link :to="'/p/' + post._id">
      <div class="title">
        <span>{{ post.title }}</span>
      </div>
      <div class="abstract">{{ post.abstract }}</div>
      <div class="meta">
        <!-- <a :href="'/u/' + item.author._id">{{item.author.name}}</a> -->
        <router-link :to="'/u/' + post.author._id" class="nickname">{{
          post.author.name
        }}</router-link>
        <span class="creat-date">{{ post.createdAt }}</span>
      </div>
    </router-link>
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
.title span {
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}
.post-item:hover {
  background-color: rgba(233, 224, 224, 0.6);
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