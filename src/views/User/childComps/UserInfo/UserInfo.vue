<template>
  <div class="container">
    <div class="background"></div>
    <div class="user">
      <!-- 用户信息 -->

      <div class="user-info">
        <!-- {{user._id}} -->

        <div class="top">
          <div class="avatar">
            <img :src="userInfo.avatar" alt="avatar" />
          </div>
          <div class="info">
            <span>简信</span>
            <div class="follow">
              <!-- <span>是否已经关注{{$store.getters.isFollowingAuthor}}</span> -->
              <button
                v-if="!$store.getters.isFollowingAuthor"
                @click="followingUser"
              >
                关注
              </button>
              <button v-else @click="unfollowingUser">取消关注</button>
            </div>
            <span>礼物</span>
          </div>
        </div>

        <div class="name">
          <span>{{ userInfo.name }}</span>
        </div>
        <div class="bio">
          {{ userInfo.bio }}
        </div>
        <div>
          <span>{{ authorFollowingUsers.length }} 关注</span> ||
          <span>{{ authorFollowers.length }} 粉丝</span>
        </div>
      </div>
      <hr />
      <div>简书创作者 | 日更达人</div>
    </div>
  </div>
</template>

<script>
// TODO:
// 关注 用户关注粉丝分离
export default {
  props: {
    userInfo: {},
    authorFollowingUsers: {},
    authorFollowers: {},
  },
  methods: {
    followingUser() {
      // 关注当前用户
      this.$store.dispatch("followingUser", this.userInfo._id);
    },
    unfollowingUser() {
      // 取消关注当前用户
      this.$store.dispatch("unfollowingUser", this.userInfo._id);
    },
  },
  // 组件销毁，数据重置，避免缓存
  destroyed() {
    this.$store.commit('set_author', {})
  }
};
</script>

<style scoped>
.background {
  width: 100%;
  height: 30vw;
  background-color: rgb(235, 224, 235);
  margin: 0;
  padding: 0;
}
.user {
  padding: 10px;
}

.top {
  display: flex;
  justify-content: space-between;
}
.avatar {
  margin-top: -51px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 6px solid #fff;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.bio {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 12px;
  color: rgb(56, 58, 59);
}

.info {
  display: flex;
}
</style>