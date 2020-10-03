<template>
  <div class="container">
    <nav-bar>
      <div slot="left" @click="$router.back()">返回</div>
      <div slot="right" @click="more">更多</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "PostHeader",
  components: {
    NavBar,
  },
  methods: {
    more() {
      this.$toast.show('还没写呢，收藏，分享，收入专题，显示模式，举报')
    }
  },

};
</script>

<style scoped>
.container {
  box-shadow: 0 0 4px #000;
}

</style>