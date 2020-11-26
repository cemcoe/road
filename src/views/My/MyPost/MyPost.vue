<template>
  <div>
    <div class="nav">
      <nav-bar>
        <div slot="left" @click="$router.back()">
          <cem-icon name="back"></cem-icon>
        </div>
        <div class="info" slot="center">我的文章</div>
      </nav-bar>
    </div>
    <div class="tabcontrol"></div>

    <div class="content">
      mypost // 获取用户公开文章， // 获取用户私密文章，条件展示
      {{ $store.state.user._id }}--{{publicPost}}

      <hr>
      <hr>
      <hr>

      {{privatePost}}


    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CemIcon from "components/common/icon/Icon";

import { getUserPosts } from "network/user";

export default {
  components: {
    NavBar,
    CemIcon,
  },

  data() {
    return {
      publicPost: [],
      privatePost: [],
    };
  },
  methods: {
    async getPublicPosts (uid) {
      const res = await getUserPosts(uid, 'public');
      this.publicPost = res.data
    },

    async getPrivatePosts (uid) {
      const res = await getUserPosts(uid, 'private');
      this.privatePost = res.data
    },
  },

  created() {
    const uid = this.$store.state.user._id
    this.getPublicPosts(uid)
    this.getPrivatePosts(uid)
  },
};
</script>

<style>
</style>