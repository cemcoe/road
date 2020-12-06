<template>
  <div class="home">
    <home-header></home-header>
    <home-tab-control></home-tab-control>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <transition name="fade">
      <alert-tip
        :alertText="alertText"
        @closeTip="closeTip"
        v-if="isShowAlert"
      ></alert-tip>
    </transition>

  </div>
</template>

<script>
import HomeHeader from "./childComps/HomeHeader/HomeHeader";
import HomeTabControl from "./childComps/HomeTabControl/HomeTabControl";
import AlertTip from "components/common/AlertTip/AlertTip";

import { getAnnouncementDetail } from "network/announcement";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeTabControl,
    AlertTip,
  },
  data() {
    return {
      isShowAlert: false,
      alertText: "",
    };
  },
  created() {
    this.getAnnouncement();
  },
  methods: {
    closeTip() {
      this.isShowAlert = false;
      // 不展示弹出内容
    },

    async getAnnouncement() {
      const res = await getAnnouncementDetail();
      const announcement = res.data.announcement.content;
      this.alertText = announcement;
      this.isShowAlert = true;
    },
  },
  computed: {
    ...mapState(["userInfo"]),
  },
};
</script>

<style scoped>
</style>
