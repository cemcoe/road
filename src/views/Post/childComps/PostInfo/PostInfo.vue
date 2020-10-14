<template>
  <div class="info">
    <div class="left">
      <!-- TODO 后端添加字段 -->
      <span>字数{{ postInfo.wordcount }} </span>
      <span> 阅读111</span>
      <!-- 字数111-阅读111 -->
    </div>
    <div class="right">
      {{ postInfo.createdAt }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    postInfo: {},
  },
};
</script>

<style scoped>
.info {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: rgba(39, 40, 41, 0.6);
  padding: 10px;
}
</style>