<template>
  <div>
    message

    <button @click="create">创建聊天室</button>

    <button @click="get">获取聊天室列表</button>

    <ul>
      <li v-for="room in rooms" :key="room._id">
        {{room._id}}

      </li>
    </ul>
  </div>
</template>

<script>
import { createRoom,getRooms } from "network/rooms";
export default {
  name: "Message",
  data() {
    return {
      rooms: []
    }
  },
  created() {
    this.$toast.show("占位,欸,还没写呢");
  },
  methods: {
    async create() {
      // 获取登录用户id
      const creator = this.$store.state.user._id;
      const res = await createRoom([creator]);
      console.log(res);
    },

    async get() {
      const res = await getRooms()
      
      console.log(res);
      this.rooms = res.room
    },
  },
};
</script>

<style>
</style>