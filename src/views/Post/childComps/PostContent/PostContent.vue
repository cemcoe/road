<template>
  <div class="content">
    {{postContent}}
  </div>
</template>

<script>
export default {
  props: {
    postContent: {
    }
  }

}
</script>

<style scoped>
.content {
  font-size: 16px;
  line-height: 28px;
  padding: 10px;
  font-family: -apple-system,BlinkMacSystemFont,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif;
}


</style>