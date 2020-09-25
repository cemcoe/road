<template>
  <div class="user">
    <!-- 用户信息 -->
    <div class="user-info">
      <!-- {{user._id}} -->
      <div class="avatar">
        <img :src="userInfo.avatar" alt="avatar">

      </div>
      <div class="name">
        <span>{{userInfo.name}}</span>
      </div>
      <div class="bio">
        {{userInfo.bio}}
      </div>

      
      <!-- {{userInfo.gender}} -->
    </div>
    <hr>
    <button>简信</button>

    <!-- <button @click="followingUser">关注</button>
    <button @click="unfollowingUser">取消关注</button>-->

    <button>礼物</button>

    <!-- <div class="follow">
        <span>{{userInfo.followingUsers.length}} 关注</span> ||
        <span>{{userInfo.followers.length}} 粉丝</span>
      </div>
    <hr />-->

    <div>简书优秀创作者</div>
  </div>
</template>

<script>
// TODO:
// 关注 用户关注粉丝分离
export default {
  props: {
    userInfo: {},
  },
};
</script>

<style scoped>
.user {
  padding: 10px;
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 10px solid rgb(202, 122, 218);
}
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  
}
.bio {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 12px;
  color: rgb(56, 58, 59);
}
</style>