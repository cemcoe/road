<template>
  <div class="content">
    <mavon-editor
      v-model="post.content"
      :subfield="false"
      :boxShadow="false"
      defaultOpen="preview"
      :toolbarsFlag="false"
      previewBackground="#fff"
      ref="md"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["post"]),
  },
};
</script>

<style scoped>
/* 穿透，覆盖组件的padding */
.content >>> .v-note-wrapper .v-note-panel .v-note-show .v-show-content,
.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html {
  padding: 0px 10px 15px 10px;
}

.content {
  font-size: 16px;
  line-height: 28px;
  font-family: -apple-system, BlinkMacSystemFont, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
}
</style>