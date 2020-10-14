<template>
  <div class="container">
    <nav-bar>
      <div slot="left">
        <button @click="$router.back()">返回</button>
        <span>{{0}}字</span>
      </div>

      <div slot="right">
        <button @click="preview">预览</button>
        <button @click="publish">发布</button>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "WriteHeader",
  data() {
    return {};
  },
  components: {
    NavBar,
  },
  methods: {
    preview() {
      this.$emit("preview");
    },
    publish() {
      this.$emit("publish");
    },
  },
  created() {},
  computed: {},
};
</script>

<style scoped>
.container >>> .right {
  width: 120px;
}
</style>