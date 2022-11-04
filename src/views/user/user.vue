<script setup>
import { onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useUserStore } from "@/stores/modules/user";
import UserInfo from "./components/user-info.vue";
import PostList from "@/components/post-list/post-list.vue";
import { storeToRefs } from "pinia";

const router = useRouter();
const route = useRoute();

const userId = route?.params?.userId;

const userStore = useUserStore();
userStore.getUserInfoAction(userId);
userStore.getUserPostsAction(userId);
userStore.getFollowersAction(userId);
userStore.getFollowingAction(userId);
const { postList } = storeToRefs(userStore);

const onClickLeft = () => {
  router.back();
};

const openSearch = () => {
  console.log("search");
};

onBeforeMount(() => {
  userStore.currentUserInfo = {};
});

const activeName = ref("post");
</script>

<template>
  <div class="user">
    <van-nav-bar
      left-arrow
      fixed
      @click-left="onClickLeft"
      @click-right="openSearch"
      :border="false"
    >
      <template #right>
        <van-icon name="search" />
      </template>
    </van-nav-bar>

    <UserInfo />

    <van-divider />

    <van-tabs v-model:active="activeName">
      <van-tab name="post" title="文章"></van-tab>
      <van-tab name="more" title="更多"></van-tab>
      <van-tab name="more" title="占喂"></van-tab>
      <van-tab name="more" title="站位"></van-tab>
    </van-tabs>

    <div class="content">
      <PostList v-show="activeName === 'post'" :postList="postList"></PostList>
      <div v-show="activeName === 'more'" class="more">more</div>
    </div>
  </div>
</template>

<style scoped>
.banner img {
  width: 100%;
}

.user {
  --van-nav-bar-background: transparent;
  --van-nav-bar-icon-color: #fff;
  --van-tabs-nav-background: transparent;
}
</style>
