<template>
  <div>
    <div class="follow">
      <div class="follow-item" v-for="user in followingUsers" :key="user._id">
        <router-link :to="'/u/' + user._id">
          <!-- {{user}} -->
          <img :src="user.avatar" alt />
          <span>{{user.name}}</span>
          ///////////////
          <span>{{user.gender}}</span>
          //////////////
          <span>{{user.bio}}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["followingUsers"]),
  },
};
</script>

<style scoped>
.follow-item {
  margin-bottom: 20px;
}
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>