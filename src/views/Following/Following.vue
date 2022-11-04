<script setup>
import { ref } from "vue";
import FollowingUserList from "./components/following-user-list.vue";
import PostList from "@/components/post-list/post-list.vue";
import { storeToRefs } from "pinia";
import useLoginStore from "@/stores/modules/login";
const loginStore = useLoginStore();

loginStore.getFollowingPostsAction();
loginStore.getFollowingAction();
const { followingUserPost, following, isLogin } = storeToRefs(loginStore);

const isLoading = ref(false);
const clickLoginButton = () => {
  isLoading.value = true;

  loginStore.loginAction().then(() => {
    loginStore.getFollowingPostsAction();
    loginStore.getFollowingAction();
  });
};
</script>

<template>
  <div class="following">
    <div class="login" v-if="!isLogin">
      <van-button
        size="normal"
        color="linear-gradient(to right, #ff6034, #ee0a24)"
        type="primary"
        @click="clickLoginButton"
        :disabled="isLoading"
        >一键登录</van-button
      >
    </div>
    <div v-else>
      <FollowingUserList :userList="following" />
      <PostList :postList="followingUserPost" />
    </div>
  </div>
</template>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--van-tabbar-height));
  justify-content: center;
  align-items: center;
}

.login .info {
  margin-bottom: 20px;
  font-size: 20px;
}
</style>
