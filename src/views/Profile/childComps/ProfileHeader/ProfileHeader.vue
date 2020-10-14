<template>
  <div class="container">
    <nav-bar>
      <div slot="left" @click="more">
        <cem-icon name="scann"></cem-icon>
      </div>
      <div slot="center">我的</div>
      <div slot="right">
        <router-link to="/writer">
          <cem-icon name="write"></cem-icon
        ></router-link>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import CemIcon from "components/common/icon/Icon";
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "ProfileHeader",
  methods: {},
  created() {},
  components: {
    NavBar,
    CemIcon,
  },
  methods: {
    more() {
      this.$toast.show("还没写呢");
    },
  },
  computed: {},
};
</script>

<style scoped>
.container {
  box-shadow: 0 0 4px rgb(204, 197, 197);
}
</style>