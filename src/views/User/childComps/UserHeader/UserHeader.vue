<template>
  <div class="container">
    <nav-bar>
      <div slot="left" @click="$router.back()">返回</div>
      <div slot="right">
        <button @click="more">搜索 更多</button>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "UserHeader",
  methods: {
  },
  created() {},
  components: {
    NavBar,
  },
  methods: {
    more() {
      this.$toast.show('还没写呢')

    }
  },
  computed: {},
};
</script>

<style scoped>
</style>