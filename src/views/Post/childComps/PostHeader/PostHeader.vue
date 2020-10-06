<template>
  <div class="container">
    <nav-bar>
      <div slot="left" @click="$router.back()">返回</div>
      <div v-if="$store.getters.isAuthor()" slot="right" @click="editPost">
        编辑
      </div>
      <div v-else slot="right" @click="more">
        更多{{ $store.getters.isAuthor() }}
      </div>
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
      this.$toast.show("还没写呢，收藏，分享，收入专题，显示模式，举报");
    },
    editPost() {
      console.log("编辑文章");
      console.log(this.$store.state.post);
      this.$router.replace("/writer/" + this.$store.state.post._id);
    },
  },
};
</script>

<style scoped>
.container {
  box-shadow: 0 0 4px #000;
}
</style>