<template>
  <div class="container">
    <div class="author-info">
      <div class="info-item avatar">
        <router-link :to="'/u/' + author._id">
          <img :src="author.avatar" alt="avatar"
        /></router-link>
      </div>
      <div class="info-item username">
        <router-link :to="'/u/' + author._id">{{ author.name }}</router-link>
      </div>
    </div>

    <div class="follow" v-if="this.$store.state.user._id">
      <!-- 用户登录时才能关注和取消关注 -->
      <button
        v-if="!$store.getters.isFollowingAuthor(author)"
        @click="followingUser(author._id)"
      >
        + 关注
      </button>
      <button v-else @click="unfollowingUser(author._id)">取消关注</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    followingUser(_id) {
      // 关注当前用户
      this.$store.dispatch("followingUser", _id);
    },
    unfollowingUser(_id) {
      // 取消关注当前用户
      this.$store.dispatch("unfollowingUser", _id);
    },
  },

  computed: {
    ...mapState(["author"]),
  },
};
</script>

<style scoped>
button {
  border: none;
  outline: none;
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
}

.follow button {
  background-color: rgb(38, 148, 38);
  margin-right: 10px;
  width: 80px;
  padding: 6px 8px;
  text-align: center;
  color: aliceblue;
  border-radius: 20px;
}
</style>