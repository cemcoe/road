<template>
  <div id="app">
    <keep-alive :include="catchList">
      <router-view></router-view>
    </keep-alive>

    <transition name="fade">
      <alert-tip
        :alertText="alertText"
        @closeTip="closeTip"
        v-if="isShowAlert"
      ></alert-tip>
    </transition>

    <main-tab-bar
      v-if="$route.meta.showFooter"
      class="main-tab-bar"
    ></main-tab-bar>
  </div>
</template>

<script>
import AlertTip from "components/common/AlertTip/AlertTip";
import MainTabBar from "components/content/mainTabbar/MainTabBar";

import { getAnnouncementDetail } from "network/announcement";
export default {
  components: {
    MainTabBar,
    AlertTip,
  },
  data() {
    return {
      // 缓存一级页面，不缓存文章详情页面
      catchList: ["Home", "Following", "Island", "Message", "Profile"],
      isShowAlert: false,
      alertText: '',
    };
  },
  methods: {
    closeTip() {
      this.isShowAlert = false;
      // 不展示弹出内容
    },

    async getAnnouncement() {
      const res = await getAnnouncementDetail();
      const announcement = res.data.announcement.content
      this.alertText = announcement
      this.isShowAlert = true
    },
  },
  created() {
    this.getAnnouncement();
  }
};
</script>

<style>
</style>
