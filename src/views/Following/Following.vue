<template>
  <div>
    <div class="followingheader">
      header

    </div>
    // 获取当前登录用户的id
    // 拿id去请求关注列表
    ///////////////////////////////
    id为{{$store.state.user._id}}的用户，关注的用户列表
    ///////////////////////////////////////////////
    <div class="follow">
      <ul>
        <li v-for="user in followingUsers" :key="user._id">{{user}}
          /////////////////////////////////////////
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { listfollowingUser } from "network/user";
export default {
  data() {
    return {
      userId: this.$store.state.user._id,
      followingUsers: [], // 用户关注列表
    };
  },
  async created() {
    // this.$toast.show("占位,欸,还没写呢");
    const result = await listfollowingUser(this.userId);
    // console.log(result.data);

    this.followingUsers = result.data.following;
  },
};
</script>

<style scoped>
.followingheader {
  height: 44px;
  background-color: #ddd;
}
.follow {
  background-color: #f40;
  padding: 10px;
}
</style>