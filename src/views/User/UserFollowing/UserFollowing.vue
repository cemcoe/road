<template>
  <div>
    <user-list :userlist=userFollowing></user-list>
  </div>
</template>

<script>
import { listfollowingUser } from "network/user";
import UserList from '../UserList/UserList'

export default {
  data() {
    return {
      userFollowing: [],
    };
  },

  components: {
    UserList,
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