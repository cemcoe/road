<script setup lang="ts">
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import useLoginStore from "@/stores/login";
const router = useRouter();

const loginStore = useLoginStore();
const { loginInfo } = storeToRefs(loginStore);

const clickLoginBtn = () => {
  console.log(loginInfo);
  loginStore.loginAction().then(() => {
    router.back();
  });
};
</script>

<template>
  <div class="login">
    <van-form @submit="clickLoginBtn">
      <van-cell-group inset>
        <van-field
          v-model="loginInfo.name"
          name="Username"
          label="账号"
          placeholder="Username"
          :rules="[{ required: true, message: 'Username is required' }]"
        />
        <van-field
          v-model="loginInfo.password"
          type="password"
          name="Password"
          label="密码"
          placeholder="Password"
          :rules="[{ required: true, message: 'Password is required' }]"
        />
      </van-cell-group>
      <div class="btn">
        <van-button
          color="linear-gradient(to right, #ff6034, #ee0a24)"
          native-type="submit"
        >
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.btn {
  text-align: center;
  margin-top: 30px;
}
</style>
