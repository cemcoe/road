<template>
  <div>
    message

    <button @click="create">创建聊天室</button>

    <ul>
      <li v-for="room in rooms" :key="room._id">
        <router-link :to="'/room/' + room._id"> {{ room._id }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { createRoom } from "network/rooms";
import { listRooms } from "network/user";

export default {
  name: "Message",
  data() {
    return {
      rooms: [],
    };
  },
  created() {
    this.$toast.show("占位,欸,还没写呢");
    this.getUserRooms();
  },
  methods: {
    async create() {
      // 获取登录用户id
      const creator = this.$store.state.user._id;
      const res = await createRoom([creator]);
      console.log(res);
    },

    async getUserRooms() {
      const res = await listRooms(this.$store.state.user._id);
      console.log(res, "--------------");
      this.rooms = res.data.rooms;
    },
  },
};
</script>

<style>
</style>