<template>
  <div>
    <div v-for="post in postList" :key="post._id" class="post">
      <post-item :post="post"></post-item>
    </div>
    <button @click="loadmore">加载更多</button>
  </div>
</template>

<script>
import PostItem from "./PostItem";
export default {
  props: {
    postList: {},
  },
  components: {
    PostItem,
  },
  methods: {
    loadmore() {
      // 当前加载的页数
      this.$emit("loadmore");
    },
  },
};
</script>

<style>
</style>