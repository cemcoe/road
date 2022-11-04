<script setup>
import { storeToRefs } from "pinia";
import useLoginStore from "@/stores/modules/login";

const props = defineProps({
  userList: {
    type: Array,
    default: [],
  },
});

const loginStore = useLoginStore();
loginStore.getFollowingAction();

const { isFollowing } = storeToRefs(loginStore);
const { followUserAction, unfollowUserAction } = loginStore;

const onClickLeft = () => history.back();
</script>

<template>
  <div class="user-list">
    <van-nav-bar title="Title" fixed left-arrow @click-left="onClickLeft" />

    <div class="users" v-if="userList.length">
      <div class="user-item" v-for="user in userList" :key="user._id">
        <router-link :to="'/u/' + user._id"> </router-link>

        <div class="item">
          <div class="left">
            <router-link :to="'/u/' + user._id">
              <img
                :src="'https://jian.cemcoe.com/jianshu_api' + user.avatar"
                alt="avatar"
              />
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
            <van-button
              v-if="!isFollowing(user._id)"
              @click="followUserAction(user._id)"
            >
              关注
            </van-button>
            <van-button
              type="primary"
              v-else
              @click="unfollowUserAction(user._id)"
              >取消关注</van-button
            >
          </div>
        </div>
      </div>
    </div>

    <div class="loading" v-else>加载中 || 空</div>
  </div>
</template>

<style scoped>
.user-list {
  --van-nav-bar-icon-color: #000;
}

.users {
  margin-top: var(--van-nav-bar-height);
}
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
