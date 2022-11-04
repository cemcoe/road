<script setup>
import { storeToRefs } from "pinia";
import useLoginStore from "@/stores/modules/login";
import { useUserStore } from "@/stores/modules/user";

const userStore = useUserStore();
const { currentUserInfo, getFollowingCount, getFollowersCount } =
  storeToRefs(userStore);

const loginStore = useLoginStore();
loginStore.getFollowingAction();
const { isFollowing } = storeToRefs(loginStore);

const followingUser = () => {
  loginStore.followUserAction(currentUserInfo.value._id);
};

const unfollowingUser = () => {
  // 取消关注当前用户
  loginStore.unfollowUserAction(currentUserInfo.value._id);
};
</script>

<template>
  <div class="container">
    <div class="background">
      <img src="@/assets/img/home/banner.png" alt="" />
    </div>
    <div class="user">
      <!-- 用户信息 -->

      <div class="user-info">
        <!-- {{user._id}} -->

        <div class="top">
          <div class="avatar">
            <van-image round fit="contain" :src="currentUserInfo.avatar" />
          </div>
          <div class="info">
            <van-button type="primary" size="small" round>祝福</van-button>
            <div class="follow">
              <!-- <span>是否已经关注{{$store.getters.isFollowingAuthor}}</span> -->
              <van-button
                type="primary"
                size="small"
                round
                @click="followingUser"
                v-if="!isFollowing(currentUserInfo._id)"
              >
                关注</van-button
              >
              <van-button
                type="primary"
                size="small"
                round
                @click="unfollowingUser"
                v-else
              >
                取关</van-button
              >
            </div>
            <van-button type="primary" size="small" round>礼物</van-button>
          </div>
        </div>

        <div class="name">
          <span>{{ currentUserInfo.name }}</span>
        </div>
        <div class="bio">
          {{ currentUserInfo.bio }}
        </div>
        <div class="follow">
          <router-link :to="'/u/' + currentUserInfo._id + '/followers'">
            <span class="follower">关注 {{ getFollowersCount }}</span>
          </router-link>

          |

          <router-link :to="'/u/' + currentUserInfo._id + '/following'">
            <span class="follower">粉丝 {{ getFollowingCount }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  width: 100%;
  background-color: rgb(235, 224, 235);
  margin: 0;
  padding: 0;
}

.background img {
  width: 100%;
}
.user {
  padding: 10px;
  padding-bottom: 0px;
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
  background-color: rgb(227, 225, 225);
}

.bio {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 12px;
  color: rgb(56, 58, 59);
}

.info {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 160px;
  /* background-color: #ccc; */
}
</style>
