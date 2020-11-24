<template>
  <div>
    <user-list :userlist="userFollowers"></user-list>
  </div>
</template>

<script>
import { listfollower } from "network/user";
import UserList from "../UserList/UserList";

export default {
  data() {
    return {
      userFollowers: [],
    };
  },

  components: {
    UserList,
  },

  methods: {
    async getUserFollowers() {
      const uid = this.$route.params.uid;
      const result = await listfollower(uid);
      this.userFollowers = result.data.followers;
    },
  },
  mounted() {
    this.getUserFollowers();
  },
};
</script>

<style>
</style>