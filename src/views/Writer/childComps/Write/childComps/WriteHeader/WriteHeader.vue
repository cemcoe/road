<template>
  <div class="container">
    <nav-bar>
      <div slot="left">
        <button @click="$router.back()">
          <cem-icon name="back"></cem-icon>
        </button>
        <span>{{ wordcount }}字</span>
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
import CemIcon from "components/common/icon/Icon";
export default {
  name: "WriteHeader",
  props: {
    wordcount: {},
  },
  data() {
    return {};
  },
  components: {
    NavBar,
    CemIcon,
  },
  methods: {
    preview() {
      this.$emit("preview");
    },
    publish() {
      this.$emit("publish");
    },
  },
};
</script>

<style scoped>
.container >>> .right {
  width: 120px;
}
</style>