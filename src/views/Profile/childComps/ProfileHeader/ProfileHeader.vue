<template>
  <div class="container">
    <nav-bar>
      <div slot="left" @click="more">相机</div>
      <div slot="right">
        <router-link to="/write">Write</router-link>
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

.container {
  border-bottom: 8px solid #000;
  
}
</style>