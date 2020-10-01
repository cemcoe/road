<template>
  <div class="home">
    <home-header></home-header>
    <home-tab-control></home-tab-control>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <!-- TODO：将write按钮抽离成一个content组件 -->
    <div class="write">
      <router-link to="/write">写</router-link>
    </div>
  </div>
</template>

<script>
import HomeHeader from "./childComps/HomeHeader/HomeHeader";
import HomeTabControl from "./childComps/HomeTabControl/HomeTabControl";

import { mapState } from 'vuex'

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
    ...mapState(['userInfo']),
    
  },
};
</script>

<style scoped>
.write {
  position: fixed;
  width: 40px;
  height: 40px;
  right: 50px;
  bottom: 80px;
  border-radius: 50%;
  background-color: #f44;
  color: aliceblue;
  line-height: 40px;
  text-align: center;
  padding: 10px;
  box-shadow: 0 0 4px #000;
}
.write a {
  color: aliceblue;
  width: 100%;
  height: 100%;
  display: block;
}
</style>
