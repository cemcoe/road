<template>
  <div class="container">
    <nav-bar>
      <div slot="left" @click="more">相机</div>
      <div slot="right">
        <router-link to="/writer">Write</router-link>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "ProfileHeader",
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