<template>
  <div class="container">
    <nav-bar>
      <div slot="left" @click="$router.back()">
        <cem-icon name="back"></cem-icon>
      </div>
      <div slot="right">
        <button @click="$router.push('/search')">
          <cem-icon name="search"></cem-icon>
        </button>

        <!-- <button @click="more"><cem-icon name="more"></cem-icon></button> -->
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CemIcon from "components/common/icon/Icon";
export default {
  name: "AuthorHeader",
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
button {
  border: none;
  outline: none;
  /* padding: 6px;
  border-radius: 4px; */
  background-color: #fff;
  line-height: 100%;
}
</style>