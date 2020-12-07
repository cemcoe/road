<template>
  <div>
    roomId: {{ this.$route.params.id }} || {{ messages.length }}

    <ul>
      <li v-for="message in messages">{{ message }}</li>
    </ul>

    <hr />

    <div>
      <input type="text" v-model="message" />
      <button @click="createMessage">创建测试新消息</button>
    </div>
    <div><button @click="getMessage">更新消息列表</button></div>
  </div>
</template>

<script>
import { getRoomDetail, createRoomMessage } from "network/rooms";
export default {
  data() {
    return {
      messages: [],
      message: "",
    };
  },
  created() {
    this.getMessage();
  },
  methods: {
    async getMessage() {
      const res = await getRoomDetail(this.$route.params.id);
      console.log(res);
      this.messages = res.data.messages;
    },

    async createMessage() {
      const res = await createRoomMessage(this.$route.params.id, this.message);
      console.log(res);
      this.getMessage();
    },
  },
};
</script>

<style scoped>
li {
  margin: 10px;
}

input {
  background-color: rgb(235, 224, 224);
}
</style>