<script setup lang="ts">
defineProps({
  author: {
    type: Object,
  },
  isFollowing: {
    type: Boolean,
  },
});

// const followBtnClick = () => {
//   console.log("TODO: 关注或取关");
// };
</script>

<template>
  <div class="container">
    <div class="author-info">
      <div class="info-item avatar">
        <router-link :to="'/u/' + author?._id">
          <img :src="author?.avatar" alt="avatar"
        /></router-link>
      </div>
      <div class="info-item username">
        <router-link :to="'/u/' + author?._id">{{ author?.name }}</router-link>
      </div>
    </div>
    <!-- <div class="follow" v-show="author.avatar">
      <van-button
        type="primary"
        round
        icon="plus"
        size="small"
        color="linear-gradient(to right, #ff6034, #ee0a24)"
        @click="followBtnClick"
        >{{ isFollowing ? "取消关注" : "关注" }}</van-button
      >
    </div> -->
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
.container {
  padding-top: 6px;
  padding-bottom: 6px;
  display: flex;
  align-items: center;
}

.author-info,
.follow {
  flex: 1;
}

.author-info {
  margin-left: 10px;
  display: flex;
  align-items: center;
}

.author-info .username a {
  color: #000;
  font-size: 14px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgb(226, 217, 217);
}
img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  /* padding-right: 10px; */
}
.username {
  padding-left: 10px;
}

.follow {
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
  width: 80px;
  padding: 6px 8px;
}
</style>
