<template>
  <div>
    <author-header></author-header>
    <div v-if="author._id">
      <author-info
        :userInfo="author"
        :authorFollowingUsers="authorFollowingUsers"
        :authorFollowers="authorFollowers"
      ></author-info>

      <author-tab-control />

      <router-view></router-view>
    </div>
    <div v-else>
      <loading />
    </div>
  </div>
</template>

<script>
import { getUserPosts, listfollowingUser, listfollower } from "network/user";
import { mapState } from "vuex";

import Loading from "components/common/loading/Loading";
import AuthorHeader from "./childComps/AuthorHeader/AuthorHeader";
import AuthorInfo from "./childComps/AuthorInfo/AuthorInfo";
import AuthorTabControl from "./childComps/AuthorTabControl/AuthorTabControl";

export default {
  name: "Author",
  data() {
    return {
      _id: null,
      authorFollowingUsers: [], // 关注
    };
  },
  components: {
    Loading,
    AuthorHeader,
    AuthorInfo,
    AuthorTabControl,
  },

  // 有id向服务器发请求
  // 拿到路由传来的参数
  created() {
    this._id = this.$route.params.id;
    this.$store.dispatch("getAuthorInfo", this._id);
    this.$store.dispatch("listAuthorFollowingUser", this._id);
    // 获取作者的关注列表
    listfollowingUser(this._id).then((res) => {
      this.authorFollowingUsers = res.data.following;
    });
  },
  methods: {
    followingUser() {
      // 关注当前用户
      this.$store.dispatch("followingUser", this._id);
    },
    unfollowingUser() {
      // 取消关注当前用户
      this.$store.dispatch("unfollowingUser", this._id);
    },
  },

  computed: {
    ...mapState(["author", "authorFollowers"]),
  },

  // 组件销毁，数据重置，避免缓存
  destroyed() {
    this.$store.commit("set_author", {});
  },
};
</script>

<style scoped>
.follow {
  padding: 10px;
}
</style>