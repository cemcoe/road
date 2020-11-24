<template>
  <div>
    <nav-bar>
      <div slot="left" @click="$router.back()">
        <cem-icon name="back"></cem-icon>
      </div>
    </nav-bar>

    <div class="follow" v-if="userlist.length">
      <div class="follow-item" v-for="user in userlist" :key="user._id">
        <router-link :to="'/u/' + user._id"> </router-link>

        <div class="item">
          <div class="left">
            <router-link :to="'/u/' + user._id">
              <img v-lazy="imgBaseUrl + user.avatar" alt="avatar" />
            </router-link>
          </div>

          <div class="center">
            <span>
              <router-link :to="'/u/' + user._id">
                {{ user.name }}
              </router-link>
            </span>
            <span>
              <router-link :to="'/u/' + user._id">
                {{ user.bio }}
              </router-link>
            </span>
          </div>

          <div class="right">
            <!-- <span>是否已经关注{{$store.getters.isFollowingAuthor}}</span> -->
            <button
              v-if="!$store.getters.isFollowingAuthor(user)"
              @click="followingUser(user._id)"
            >
              关注
            </button>
            <cem-button type="primary" v-else @click="unfollowingUser(user._id)"
              >取消关注</cem-button
            >
            <!-- <button v-else @click="unfollowingUser(user._id)">取消关注</button> -->
          </div>
        </div>
      </div>
    </div>

    <div class="loading" v-else>加载中 || 空</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CemButton from "components/common/Button/Button";

import NavBar from "components/common/navbar/NavBar";
import CemIcon from "components/common/icon/Icon";

export default {
  props: {
    userlist: {},
  },
  // data() {
  //   return {};
  // },
  components: {
    CemButton,
    NavBar,
    CemIcon,
  },
  methods: {
    followingUser(_id) {
      // 关注当前用户
      console.log(_id);
      this.$store.dispatch("followingUser", _id);
    },
    unfollowingUser(_id) {
      // 取消关注当前用户
      this.$store.dispatch("unfollowingUser", _id);
    },
  },
  computed: {
    ...mapState(["followingUsers", "imgBaseUrl"]),
  },
};
</script>

<style scoped>
.item {
  display: flex;
  font-size: 12px;
  align-items: center;
  padding: 6px;
  border-bottom: 1px solid rgb(207, 198, 207);
}
.left {
  flex: 0 0 60px;
}
.right {
  flex: 0 0 100px;
}
.center {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50px;
}

.right {
  text-align: right;
}

img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>