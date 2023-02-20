<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
const { currentUserInfo } = storeToRefs(userStore);
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
            <img :src="currentUserInfo.avatar" />
          </div>
        </div>

        <div class="name">
          <span>{{ currentUserInfo.name }}</span>
        </div>
        <div class="bio">
          {{ currentUserInfo.bio }}
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
  overflow: hidden;
}

.avatar img {
  width: 100%;
  height: 100%;
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
