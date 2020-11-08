<template>
  <div>
    <profile-header></profile-header>
    <user-info-banner></user-info-banner>
    <product-banner></product-banner>

    <div class="li-item">
      <div>我的钱包</div>
      <div>简书活动</div>
      <div>每日任务</div>
      <div>我的小岛</div>
      <div>浏览历史</div>
      <div>开启夜间模式</div>
      <div>设置</div>
      <div>
        <router-link to="/about">关于</router-link>
      </div>
    </div>

    <div>
      <!-- <button v-if="user._id" @click="signout">退出登录</button> -->
      <cem-button type="danger" v-if="user._id" @click="signout"
        >退出登录</cem-button>

      <div v-if="user._id">
        <router-link :to="'/reset/' + user._id">更新用户信息</router-link>
      </div>
    </div>
    <div>
      <li>简书公告1</li>
      <li>简书公告2</li>
    </div>
    <hr />
  </div>
</template>

<script>
import ProfileHeader from "./childComps/ProfileHeader/ProfileHeader";
import UserInfoBanner from "./childComps/UserInfoBanner/UserInfoBanner";
import ProductBanner from "./childComps/ProductBanner/ProductBanner";

import CemButton from "components/common/Button/Button";
import { mapState } from "vuex";
export default {
  name: "Profile",
  components: {
    ProfileHeader,
    UserInfoBanner,
    ProductBanner,
    CemButton,
  },
  data() {
    return {};
  },
  methods: {
    signout() {
      this.$store.commit("del_token");
      this.$store.commit("del_user");
      this.user = {};
      this.$toast.show("退出登录成功", 2000);
    },
  },
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style scoped>
.li-item {
  width: 90%;
  margin: 10px auto;
  box-shadow: 0px 0px 10px rgb(223, 217, 217);
  padding: 16px;
  border-radius: 6px;
}

.li-item div {
  padding: 10px;
  margin-bottom: 4px;
}
</style>