<script setup lang="ts">
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import useLoginStore from "@/stores/login";
import LoginCard from "./components/LoginCard.vue";
import { works } from "./works";

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
          <!-- <van-icon name="search" color="#000" size="20" /> -->
        </template>
      </van-nav-bar>
    </div>
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

      <van-divider />

      <div class="works">
        <div
          class="work"
          v-for="work in works"
          :key="work.id"
          @click="$router.push(work.path)"
        >
          <div class="img">
            <img :src="userInfo.avatar" :alt="work.title" />
          </div>
          <div class="title">{{ work.title }}</div>
          <div class="info">{{ work.info }}</div>
        </div>
      </div>
    </div>

    <div class="ad">
      <img src="@/assets/img/home/banner.png" alt="" />
    </div>

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
  box-shadow: 4px 4px 6px rgb(228, 225, 225);
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

.works {
  display: flex;
  justify-content: space-around;
}

.bottom-line {
  font-size: 14px;
  color: #ccc;
}

.work {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.work .img {
  width: 30px;
}

.work .img img {
  width: 100%;
}

.work .title {
  margin-top: 8px;
  margin-bottom: 6px;
  font-size: 14px;
}

.work .info {
  font-size: 12px;
  color: #ccc;
}

.ad {
  width: 90vw;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;

  border-radius: 10px;
}

.ad img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 4px 4px 6px rgb(228, 225, 225);
}

.settings {
  margin: 20px auto;
}
</style>
