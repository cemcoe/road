<template>
  <div class="home">
    <div id="nav">
      <home-header></home-header>
      <home-tab-control></home-tab-control>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>

      <div class="write">
        <router-link to="/write">写文章</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "./childComps/HomeHeader/HomeHeader";
import HomeTabControl from "./childComps/HomeTabControl/HomeTabControl";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeTabControl,
  },
  data() {
    return {};
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
  created() {
    this.$toast.show('再次提醒，网站文章数据由狗屁不同文章生成器生成，不具有任何的价值，仅供占位使用。亦不代表本人观点。', 4000)
  },
};
</script>

<style scoped>
.write {
  position: fixed;
  width: 50px;
  height: 50px;
  right: 50px;
  bottom: 70px;
  border-radius: 50%;
  background-color: #f44;
  color: aliceblue;
  line-height: 50px;
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
