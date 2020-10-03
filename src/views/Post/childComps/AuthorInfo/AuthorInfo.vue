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

    <div class="follow">
      <button
        v-if="!$store.getters.isFollowingAuthor(author)"
        @click="followingUser(author._id)"
      >
        关注
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
  background-color: green;
  margin-right: 10px;
  width: 60px;
  text-align: center;
  color: aliceblue;
}
</style>