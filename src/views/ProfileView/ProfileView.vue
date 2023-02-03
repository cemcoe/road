<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import useLoginStore from "@/stores/login";
import LoginCard from "./components/LoginCard.vue";
import PostList from "@/components/PostList/PostList.vue";
import { getUserPosts } from "@/service/modules/user";

const router = useRouter();

const loginStore = useLoginStore();
const { userInfo, isLogin } = storeToRefs(loginStore);

const goAuthPage = (path: string) => {
  if (isLogin.value) {
    router.push(path);
  } else {
    router.push("/login");
  }
};

const showRight = ref(false);

const handelClick = () => {
  showRight.value = true;
};

const activeName = ref("post");

const postList = ref([]);
onMounted(async () => {
  const res = await getUserPosts(userInfo.value.id);
  const { status, data } = res;
  if (status === 200) {
    postList.value = data.postList;
  }
});
</script>

<template>
  <LoginCard></LoginCard>
  <div v-if="isLogin">
    <div class="header">
      <van-nav-bar title="我的" left-text="Back" left-arrow>
        <template #left>
          <!-- <van-icon name="scan" color="#000" size="20" /> -->
        </template>
        <template #right>
          <van-icon
            @click="handelClick"
            name="wap-nav"
            color="#000"
            size="20"
          />
        </template>
      </van-nav-bar>
    </div>

    <van-popup
      v-model:show="showRight"
      position="right"
      :style="{ width: '70%', height: '100%' }"
    >
      <div class="settings">
        <van-cell-group :border="false">
          <van-cell
            :border="false"
            title="清除缓存"
            is-link
            @click="loginStore.logoutAction"
          />
          <van-cell :border="false" title="换账号登录" is-link to="/login" />
        </van-cell-group>
        <van-cell-group :border="false">
          <van-cell
            :border="false"
            title="GitHub"
            is-link
            url="https://github.com/cemcoe/xbook"
          />
          <van-cell
            :border="false"
            title="Twitter"
            is-link
            url="https://twitter.com/cem_coe"
          />
        </van-cell-group>
      </div>
    </van-popup>

    <div class="card user">
      <div class="user-info">
        <div class="avatar" @click="goAuthPage(`/u/${userInfo.id}`)">
          <img :src="userInfo.avatar" alt="" srcset="" />
        </div>
        <div class="info">
          <div class="name">
            <div class="user-info" @click="goAuthPage(`/u/${userInfo.id}`)">
              {{ userInfo.name || "请登录" }}
            </div>
          </div>
          <div class="bottom-line">
            {{ userInfo.bio }}
          </div>
        </div>
      </div>
    </div>

    <van-tabs v-model:active="activeName">
      <van-tab name="post" title="文章"></van-tab>
      <van-tab name="more" title="更多"></van-tab>
      <van-tab name="more" title="占喂"></van-tab>
      <van-tab name="more" title="站位"></van-tab>
    </van-tabs>

    <div class="content">
      <div v-show="activeName === 'post'">
        <PostList v-if="postList.length !== 0" :postList="postList"></PostList>
      </div>

      <div v-show="activeName === 'more'" class="more">more</div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 90vw;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px 10px;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-info .avatar {
  width: 50px;
  height: 50px;
}

.user-info .avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.user-info .info {
  display: flex;
  flex-direction: column;

  height: 50px;
  justify-content: space-around;
  margin-left: 16px;
}

.user-info .name {
  color: #000;
  font-weight: 700;
}

.user-info .info .item {
  color: rgb(165, 159, 159);
  margin-right: 10px;
}

.info .item .value {
  color: #000;
}

.settings {
  margin: 20px auto;
}
</style>
