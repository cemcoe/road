<template>
  <div>
    <div class="follow">
      <div class="follow-item" v-for="user in followingUsers" :key="user._id">
        <router-link :to="'/u/' + user._id"> </router-link>

        <div class="item">
          <div class="left">
            <router-link :to="'/u/' + user._id">
              <img :src="imgBaseUrl + user.avatar" alt="avatar" />
            </router-link>
          </div>

          <div class="center">
            <span>
              <router-link :to="'/u/' + user._id">
                {{ user.name }}
              </router-link>
            </span>
            <span>
              <router-link :to="'/u/' + user._id">
                {{ user.bio }}
              </router-link>
            </span>
          </div>

          <div class="right">
            <!-- <span>是否已经关注{{$store.getters.isFollowingAuthor}}</span> -->
            <button
              v-if="!$store.getters.isFollowingAuthor(user)"
              @click="followingUser(user._id)"
            >
              关注
            </button>
            <button v-else @click="unfollowingUser(user._id)">取消关注</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    followingUser(_id) {
      // 关注当前用户
      console.log(_id);
      this.$store.dispatch("followingUser", _id);
    },
    unfollowingUser(_id) {
      // 取消关注当前用户
      this.$store.dispatch("unfollowingUser", _id);
    },
  },
  computed: {
    ...mapState(["followingUsers", "imgBaseUrl"]),
  },
};
</script>

<style scoped>
.item {
  display: flex;
  font-size: 12px;
  align-items: center;
  padding: 6px;
  border-bottom: 1px solid rgb(207, 198, 207);
}
.left,
.right {
  flex: 0 0 60px;
}
.center {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50px;
}

.right {
  text-align: center;
}

img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>