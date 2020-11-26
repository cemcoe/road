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
    <div class="tabcontrol">
      <div
        v-for="tab in tabs"
        @click="changeStatus(tab)"
        :key="tab.id"
        :class="{ on: tab.status === status }"
      >
        {{ tab.title }}
      </div>
    </div>

    <hr />

    <div class="content"  v-if="publicPost.length">
      <div class="public" v-show="status === 'public'">
        <post-list :postList="publicPost"></post-list>
      </div>


      <div class="private" v-show="status === 'private'">
        <post-list :postList="privatePost"></post-list>
      </div>
    </div>

    <div v-else>
      <loading></loading>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CemIcon from "components/common/icon/Icon";
import PostList from "components/content/postList/PostList";
import Loading from "components/common/loading/Loading";

import { getUserPosts } from "network/user";

export default {
  components: {
    NavBar,
    CemIcon,
    PostList,
    Loading,
  },

  data() {
    return {
      publicPost: [],
      privatePost: [],
      status: "public",
      tabs: [
        { id: 1, title: "公开文章", status: "public" },
        { id: 2, title: "私密文章", status: "private" },
      ],
    };
  },
  methods: {
    async getPublicPosts(uid) {
      const res = await getUserPosts(uid, "public");
      this.publicPost = res.data;
    },

    async getPrivatePosts(uid) {
      const res = await getUserPosts(uid, "private");
      this.privatePost = res.data;
    },

    changeStatus(tab) {
      if (this.status === tab.status) {
        return;
      }
      this.status = tab.status;
      console.log(this.status);
    },
  },

  created() {
    const uid = this.$store.state.user._id;
    this.getPublicPosts(uid);
    this.getPrivatePosts(uid);
  },
};
</script>

<style scoped>
.tabcontrol {
  margin-top: 10px;
  display: flex;


}
.tabcontrol div {
  flex: 1;
  text-align: center;
  line-height: 20px;
}
.tabcontrol .on {
  color: #f40;
}

.content .on {
  background-color: #666;
}
</style>