<script setup>
import PostItem from "./post-item.vue";
const props = defineProps({
  postList: {
    type: Array,
    // 对象或者数组应当用工厂函数返回。
    // 工厂函数会收到组件所接收的原始 props
    // 作为参数
    default(rawProps) {
      return [];
    },
  },
});
</script>

<template>
  <div>
    <div v-for="post in postList" :key="post._id" class="post">
      <PostItem :post="post"></PostItem>
    </div>
    <van-divider>到底了</van-divider>
  </div>
</template>

<style scoped>
.no-data {
  background-color: var(--main-bgc-color);
  color: var(--main-text-color);
}
</style>
