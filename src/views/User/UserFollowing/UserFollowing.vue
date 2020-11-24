<template>
  <div>
    <ul>
      <li v-for="item in userFollowing" :key="item._id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { listfollowingUser } from "network/user";
export default {
  data() {
    return {
      userFollowing: [],
    };
  },

  methods: {
    async getUserFollowing() {
      const uid = this.$route.params.uid;
      const result = await listfollowingUser(uid);
      this.userFollowing = result.data.following;
    },
  },
  mounted() {
    this.getUserFollowing();
  },
};
</script>

<style>
</style>