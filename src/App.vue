<template>
  <div id="app">
    <keep-alive :include="catchList">
      <router-view></router-view>
    </keep-alive>

    <main-tab-bar
      v-if="$route.meta.showFooter"
      class="main-tab-bar"
    ></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";

export default {
  components: {
    MainTabBar,
  },
  data() {
    return {};
  },
  computed: {
    catchList() {
      // 缓存一级页面，不缓存文章详情页面
      return ["Home", "Following", "Island", "Message", "Profile"];
    },
  },
};
</script>

<style>
</style>
