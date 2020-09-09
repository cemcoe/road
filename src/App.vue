<template>
  <div id="app">
    <router-view/>
    <main-tab-bar class="main-tab-bar"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";
export default {
  components: {
    MainTabBar,
  }
}
</script>

<style>
</style>
