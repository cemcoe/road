<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import useLoginStore from "@/stores/login";
const loginStore = useLoginStore();

const { isLogin } = storeToRefs(loginStore);

const isLoading = ref(false);
const clickLoginButton = () => {
  isLoading.value = true;
  loginStore.loginAction();
};
</script>

<template>
  <div class="profile">
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
