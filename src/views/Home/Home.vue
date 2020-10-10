<template>
  <div class="home">
    <home-header></home-header>
    <home-tab-control></home-tab-control>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import HomeHeader from "./childComps/HomeHeader/HomeHeader";
import HomeTabControl from "./childComps/HomeTabControl/HomeTabControl";

import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeTabControl,
  },
  data() {
    return {};
  },
  created() {
    this.$toast.show(
      "再次提醒，网站文章数据由狗屁不通文章生成器生成，不具有任何的价值，仅供占位使用。亦不代表本人观点。",
      4000
    );
  },
  computed: {
    ...mapState(["userInfo"]),
  },
};
</script>

<style scoped>
</style>
