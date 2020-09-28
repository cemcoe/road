<template>
  <div class="container">
    <nav-bar>
      <div slot="center">
        关注
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "FollowingHeader",
  
  components: {
    NavBar,
  },
};
</script>

<style scoped>
</style>