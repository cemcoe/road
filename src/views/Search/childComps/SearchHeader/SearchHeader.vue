<template>
  <div class="container">
    <nav-bar>
      <div slot="left" @click="$router.back()">
        <cem-icon name="back"></cem-icon>
      </div>
      <div slot="center">
        <cem-input placeholder="搜索文章专题用户文集" v-model="key"></cem-input>
      </div>
      <div slot="right">
        <button @click="readySearch">
          <cem-icon name="search"></cem-icon>
        </button>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CemIcon from "components/common/icon/Icon";
import CemInput from "components/common/Input/Input";
export default {
  name: "SearchHeader",
  data() {
    return {
      key: "", // 搜索词
    };
  },
  components: {
    NavBar,
    CemIcon,
    CemInput,
  },
  methods: {
    readySearch() {
      console.log("子组件准备搜索: ", this.key);
      this.$emit("readySearch", this.key);
    },
  },
  computed: {},
};
</script>

<style scoped>
</style>