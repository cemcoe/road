<template>
  <div class="info">
    <div class="left">
      <!-- TODO 后端添加字段 -->
      字数111-阅读111
    </div>
    <div class="right">
      {{postInfo}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    postInfo: {
      // 2020-09-18T07:01:04.609Z

    }
  }

}
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