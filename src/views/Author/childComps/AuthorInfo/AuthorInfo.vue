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
            <cem-button type="primary" @click="create">简信</cem-button>
            <div class="follow">
              <!-- <span>是否已经关注{{$store.getters.isFollowingAuthor}}</span> -->
              <cem-button
                type="primary"
                v-if="!$store.getters.isFollowingAuthor(userInfo)"
                @click="followingUser"
              >
                关注</cem-button
              >
              <cem-button type="primary" v-else @click="unfollowingUser"
                >取消关注</cem-button
              >
            </div>
            <cem-button type="primary">礼物</cem-button>
          </div>
        </div>

        <div class="name">
          <span>{{ userInfo.name }}</span>
        </div>
        <div class="bio">
          {{ userInfo.bio }}
        </div>
        <div class="follow">
          <router-link :to="'/users/' + userInfo._id + '/following'">
            <span class="follower">关注 {{ authorFollowingUsers.length }}</span>
          </router-link>

          |

          <router-link :to="'/users/' + userInfo._id + '/followers'">
            <span class="follower">粉丝 {{ authorFollowers.length }}</span>
          </router-link>
        </div>
      </div>
      <hr />
      <div>简书创作者 | 日更达人</div>
    </div>
  </div>
</template>

<script>
import CemButton from "components/common/Button/Button";
import { createRoom } from "network/rooms";
// TODO:
// 关注 用户关注粉丝分离
export default {
  props: {
    userInfo: {},
    authorFollowingUsers: {},
    authorFollowers: {},
  },
  components: {
    CemButton,
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

    async create() {
      // 获取登录用户id
      // 创建聊天室
      const creator = this.$store.state.user._id;
      const res = await createRoom([this.$route.params.id]);
      console.log(res);
      if (res.status === 200) {
        this.$toast.show("房间创建成功，为你跳转");
        const rid = res.data.room._id;
        console.log(rid);

        setTimeout(() => {
          // 跳转到聊天室
          this.$router.replace(`/room/${rid}`);
        }, 1000);
      }
    },
  },
  // 组件销毁，数据重置，避免缓存
  destroyed() {
    this.$store.commit("set_author", {});
  },
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