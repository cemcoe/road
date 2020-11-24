<template>
  <div>
    <ul>
      <li v-for="item in userFollowers" :key="item._id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { listfollower } from "network/user";
export default {
  data() {
    return {
      userFollowers: [],
    };
  },

  methods: {
    async getUserFollowers() {
      const uid = this.$route.params.uid;
      const result = await listfollower(uid);
      this.userFollowers = result.data.followers
    },
  },
  mounted() {
    this.getUserFollowers();
  },
};
</script>

<style>
</style>