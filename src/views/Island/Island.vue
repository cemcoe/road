<template>
  <div>
    展示帖子列表，开发中。。。

    <div class="post" v-for="post in islandPostList" :key="post._id">
      {{ post.content }} --- {{ post.author.name }} -- {{ post.island.name }}
    </div>
  </div>
</template>

<script>
import { getIslandPostList } from "network/island";
export default {
  name: "Island",
  data() {
    return {
      islandPostList: [],
    };
  },
  created() {
    // 发起网络请求
    getIslandPostList().then(
      (res) => (this.islandPostList = res.data.islandPost)
    );
  },
};
</script>

<style>
</style>